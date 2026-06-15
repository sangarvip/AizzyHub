/**
 * Feature: seo-audit-improvements
 *
 * Validates: Requirements 2.1, 2.2
 */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeTrustBar from "./HomeTrustBar";

describe("HomeTrustBar — trust signal items", () => {
  it("renders without crashing", () => {
    render(<HomeTrustBar />);
  });

  it("renders at least 5 trust signal items", () => {
    render(<HomeTrustBar />);
    const items = screen.getAllByTestId("trust-signal-item");
    expect(items.length).toBeGreaterThanOrEqual(5);
  });

  it("each trust signal item contains an SVG icon", () => {
    const { container } = render(<HomeTrustBar />);
    const items = container.querySelectorAll('[data-testid="trust-signal-item"]');
    expect(items.length).toBeGreaterThanOrEqual(5);

    items.forEach((item) => {
      const svg = item.querySelector("svg");
      expect(svg).not.toBeNull();
    });
  });

  it("each trust signal item contains a text span", () => {
    const { container } = render(<HomeTrustBar />);
    const items = container.querySelectorAll('[data-testid="trust-signal-item"]');

    items.forEach((item) => {
      const span = item.querySelector("span");
      expect(span).not.toBeNull();
      expect(span!.textContent!.trim().length).toBeGreaterThan(0);
    });
  });
});
