import { describe, expect, it } from "vitest";
import { blogPosts } from "./blog";

describe("blog data", () => {
  it("includes the API request article with readable body content", () => {
    const article = blogPosts.find((post) => post.id === "api-request-flow-go-fiber");

    expect(article).toBeDefined();
    expect(article.content.length).toBeGreaterThan(0);
    expect(article.content.some((block) => block.type === "code")).toBe(true);
    expect(article.tags).toEqual(expect.arrayContaining(["HTTP", "Go", "Fiber"]));
  });
});
