import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../context/ThemeContext";
import DocsLayout from "./DocsLayout";

describe("DocsLayout", () => {
  it("opens and closes an accessible mobile navigation dialog", async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <DocsLayout>
          <section id="hero">Hero</section>
        </DocsLayout>
      </ThemeProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("dialog", { name: "Site navigation" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close menu" }));
    await waitFor(() => {
      expect(screen.queryByRole("dialog", { name: "Site navigation" })).not.toBeInTheDocument();
    });
  });
});
