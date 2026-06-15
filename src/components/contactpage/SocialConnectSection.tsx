import { Linkedin, Youtube, Instagram } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
import { Routes } from "@/src/assets/lang/routes";

export default function SocialConnectSection() {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-xl border border-border bg-surface shadow-sm text-center py-10 px-6">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-6">
            Connect on Social Media
          </h2>

          <div className="flex justify-center items-center gap-6 text-muted">
            <Link
              href={Routes.socials.x}
              target="_blank"
              aria-label="Twitter"
              className="hover:text-indigo-600 transition-colors"
            >
              <RiTwitterXFill size={20} />
            </Link>

            <Link
              href={Routes.socials.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-indigo-600 transition-colors"
            >
              <Linkedin size={20} />
            </Link>

            <Link
              href={Routes.socials.youtube}
              target="_blank"
              aria-label="YouTube"
              className="hover:text-indigo-600 transition-colors"
            >
              <Youtube size={20} />
            </Link>

            <Link
              href={Routes.socials.instagram}
              target="_blank"
              aria-label="Instagram"
              className="hover:text-indigo-600 transition-colors"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
