import { describe, expect, it } from "vitest";
import { projects } from "./projects";

describe("project data", () => {
  it("does not expose placeholder links", () => {
    const links = projects.flatMap(({ github, webDemo, mobileDemo }) =>
      [github, webDemo, mobileDemo].filter(Boolean),
    );

    expect(links).not.toContain("#");
    links.forEach((link) => expect(link).toMatch(/^https:\/\//));
  });

  it("provides posters for every video preview", () => {
    projects.filter((project) => project.video).forEach((project) => {
      expect(project.poster).toMatch(/^\/assets\/videos\/.+\.jpg$/);
    });
  });
});
