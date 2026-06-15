"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

/* ----------------------------------------------
   1️⃣ Props Type
---------------------------------------------- */
interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

/* ----------------------------------------------
   2️⃣ Default Data (for direct use)
---------------------------------------------- */
const heroSectionData: HeroProps = {
  title: "Next-Gen Finance. Smarter Tech.",
  subtitle: "Your Easy Guide to Tech, AI & Smart Investing - Explained Simply.",
  buttonText: "Start Reading",
  buttonLink: "/blog",
  imageSrc: "/homepage/hero-section/hero-image.png",
  imageAlt: "Finance dashboard on laptop and phone",
};

/* ----------------------------------------------
   3️⃣ Component
---------------------------------------------- */
export default function HeroSection(): JSX.Element {
  const { title, subtitle, buttonText, buttonLink, imageSrc, imageAlt } =
    heroSectionData;

  return (
    <section className="relative w-full bg-background py-16 md:py-24 overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-10 px-6 md:flex-row md:gap-16">
        {/* 🧠 Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold leading-snug text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>

          <Link
            href={buttonLink}
            className="mt-6 inline-block rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-600 transition-all"
          >
            {buttonText}
          </Link>
        </div>

        {/* 💻 Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-[90%] max-w-md md:max-w-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
