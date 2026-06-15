"use client";

import Image from "next/image";
import { JSX } from "react";

/* ----------------------------------------------
   1️⃣ Types
---------------------------------------------- */
interface Partner {
  id: number;
  name: string;
  logoSrc: string;
  href: string;
}

/* ----------------------------------------------
   2️⃣ Partner Data (Example)
---------------------------------------------- */
const partners: Partner[] = [
  {
    id: 1,
    name: "TradingView",
    logoSrc: "/partners/tradingview.svg",
    href: "https://www.tradingview.com/",
  },
  {
    id: 2,
    name: "Zerodha",
    logoSrc: "/partners/zerodha.svg",
    href: "https://zerodha.com/",
  },
  {
    id: 3,
    name: "Groww",
    logoSrc: "/partners/groww.svg",
    href: "https://groww.in/",
  },
  {
    id: 4,
    name: "CoinMarketCap",
    logoSrc: "/partners/coinmarketcap.svg",
    href: "https://coinmarketcap.com/",
  },
  {
    id: 5,
    name: "Morningstar",
    logoSrc: "/partners/morningstar.svg",
    href: "https://www.morningstar.in/",
  },
];

/* ----------------------------------------------
   3️⃣ Component
---------------------------------------------- */
export default function PartnersSection(): JSX.Element {
  return (
    <section className="w-full bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
          Recommended Tools & Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-center">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={partner.logoSrc}
                alt={partner.name}
                width={120}
                height={40}
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
