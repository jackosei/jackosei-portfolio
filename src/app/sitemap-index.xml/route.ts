import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const baseUrl = 'https://jackosei.com'
    const currentDate = new Date().toISOString()
    
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Main Sitemap -->
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  
  <!-- Journals Sitemap (if you want to separate them in the future) -->
  <!-- <sitemap>
    <loc>${baseUrl}/sitemap-journals.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap> -->
  
  <!-- Services Sitemap (if you want to separate them in the future) -->
  <!-- <sitemap>
    <loc>${baseUrl}/sitemap-services.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap> -->
  
</sitemapindex>`

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap index:', error)
    return new NextResponse('Error generating sitemap index', { status: 500 })
  }
}
