"use client";

import Image from "next/image";
import { JSX } from "react";

export default function AboutImageSection(): JSX.Element {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src="/aboutpage/about-image/about-team.jpg" // 🖼️ Replace with your actual image path
            alt="AizzyHub Team collaborating and sharing ideas"
            width={1200}
            height={600}
            className="object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
