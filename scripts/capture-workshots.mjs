#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public', 'workshots');
const SITES_PATH = path.join(ROOT, 'scripts', 'workshots.sites.json');

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function loadSites() {
  const raw = await fs.promises.readFile(SITES_PATH, 'utf8');
  const sites = JSON.parse(raw);
  if (!Array.isArray(sites)) throw new Error('sites file must be an array');
  return sites;
}

function toFilename(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function captureSite(page, site) {
  const {
    name,
    url,
    viewport = { width: 1440, height: 900 },
    waitUntil = 'networkidle',
    fullPage = false,
    // selector ignored by request
    dark = false,
  } = site;

  const filename = `${toFilename(name)}.png`;
  const outPath = path.join(OUT_DIR, filename);

  await page.emulateMedia({ colorScheme: dark ? 'dark' : 'light' });
  await page.setViewportSize(viewport);
  const response = await page.goto(url, { waitUntil, timeout: 60000 });
  if (!response || !response.ok()) {
    console.warn(`[warn] navigation not OK for ${url}: ${response?.status?.()}`);
  }

  // Extra settle time for client-side animations/hero assets
  await page.waitForTimeout(3000);
  await page.screenshot({ path: outPath, type: 'png', fullPage: false });
  return outPath;
}

async function main() {
  await ensureDir(OUT_DIR);
  const sites = await loadSites();
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const site of sites) {
    try {
      const saved = await captureSite(page, site);
      console.log(`[ok] ${site.name} -> ${path.relative(ROOT, saved)}`);
    } catch (err) {
      console.error(`[error] ${site.name}:`, err.message);
    }
  }

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


