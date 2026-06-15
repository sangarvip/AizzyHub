/**
 * Feature: seo-audit-improvements
 * Property 11: HeroSection contains no forbidden phrases
 *
 * Validates: Requirements 1.1, 1.6
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeHero from "./HomeHero";

// Mock next/link — render children as a plain anchor
vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

// Mock next/image in case it is ever used inside HomeHero
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...rest
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} {...rest} />,
}));

describe("HomeHero — Property 11: no forbidden phrases", () => {
  it("renders without crashing", () => {
    render(<HomeHero />);
  });

  it("does not contain the word 'manual'", () => {
    const { container } = render(<HomeHero />);
    expect(container.textContent).not.toMatch(/\bmanual\b/i);
  });

  it("does not contain the phrase 'AI equipment'", () => {
    const { container } = render(<HomeHero />);
    expect(container.textContent).not.toContain("AI equipment");
  });

  it("does not contain the phrase '100% solved'", () => {
    const { container } = render(<HomeHero />);
    expect(container.textContent).not.toContain("100% solved");
  });

  it("does not contain the word 'courses'", () => {
    const { container } = render(<HomeHero />);
    expect(container.textContent).not.toMatch(/\bcourses\b/i);
  });

  it("h1 text matches required copy", () => {
    render(<HomeHero />);
    const h1 = screen.getByRole("heading", { level: 1 });
    // The component uses &amp; which renders as & in the DOM
    expect(h1.textContent).toBe(
      "Simple Finance & AI Investing Guides for Beginners",
    );
  });
});
