import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "./Hero";

describe("Hero", () => {
  it("presents the portfolio owner and a downloadable CV", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1, name: "Ou Thorninvithyea" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute(
      "href",
      "/assets/outhornnivithyea_cv.pdf",
    );
  });
});
