import { motion } from "framer-motion";

const clientLogos = [
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98159539aa31df_client-logo-01.svg",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98155090aa31e1_client-logo-02.svg",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b9815d7e4aa31e2_client-logo-03.svg",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98155d23aa31e0_client-logo-04.svg",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b9815a95eaa31e3_client-logo-07.svg",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b981538dbaa31e4_client-logo-06.svg",
];

export default function ClientCarousel() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="flex animate-scroll">
        {/* First set of logos */}
        {clientLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <img
              src={logo}
              alt="Client logo"
              className="h-8 opacity-50 hover:opacity-100 transition-opacity client-logo"
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {clientLogos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8">
            <img
              src={logo}
              alt="Client logo"
              className="h-8 opacity-50 hover:opacity-100 transition-opacity client-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
