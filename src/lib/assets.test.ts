import { describe, expect, it } from "vitest";
import { assetPath } from "./assets";

describe("assetPath", () => {
  it("resolves assets beneath the GitHub Pages base path", () => {
    expect(
      assetPath("recipe-tuscan.webp", "/recipe-design-website/"),
    ).toBe("/recipe-design-website/assets/recipe-tuscan.webp");
  });

  it("normalizes a base path without a trailing slash", () => {
    expect(assetPath("chef-hat.svg", "/recipe-design-website")).toBe(
      "/recipe-design-website/assets/chef-hat.svg",
    );
  });
});
