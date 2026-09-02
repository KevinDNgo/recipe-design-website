import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

describe("Savora app", () => {
  beforeEach(() => {
    window.location.hash = "#/";
  });

  it("filters recipes and recovers from an empty result", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Italian Cuisine" }));
    expect(
      screen.queryByRole("heading", {
        name: "Rustic Pesto & Chicken Skillet",
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Caprese Chicken Breast Bake" }),
    ).toBeInTheDocument();

    const search = screen.getByRole("searchbox", { name: "Search recipes" });
    await user.clear(search);
    await user.type(search, "lobster");
    expect(
      screen.getByRole("heading", {
        name: "No recipes matched that request.",
      }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Clear search" }));
    expect(screen.getAllByRole("article")).toHaveLength(3);
  });

  it("records submitted searches and closes the history drawer with Escape", async () => {
    const user = userEvent.setup();
    render(<App />);

    const search = screen.getByRole("searchbox", { name: "Search recipes" });
    await user.clear(search);
    await user.type(search, "rosemary{Enter}");
    await user.click(screen.getByRole("button", { name: "Recent queries" }));

    const drawer = screen.getByRole("dialog", { name: "Recent queries" });
    expect(within(drawer).getByText('"rosemary"')).toBeInTheDocument();
    expect(within(drawer).getByText("Just now")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(
      screen.queryByRole("dialog", { name: "Recent queries" }),
    ).not.toBeInTheDocument();
  });

  it("navigates from a recipe card to its detail view", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole("link", {
        name: "View Tuscan Garlic Chicken with Basil",
      }),
    );

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Tuscan Garlic Chicken with Basil",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Step-by-Step Instructions" }),
    ).toBeInTheDocument();
  });

  it("shows detail content for the selected recipe", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole("link", { name: "View Caprese Chicken Breast Bake" }),
    );

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Caprese Chicken Breast Bake",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Fresh Mozzarella")).toBeInTheDocument();
    expect(screen.queryByText("Heavy Cream")).not.toBeInTheDocument();
  });

  it("filters the ingredient explorer", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getAllByRole("link", { name: "Ingredient Explorer" })[0],
    );
    const search = await screen.findByRole("searchbox", {
      name: "Search ingredients",
    });
    await user.clear(search);
    await user.type(search, "pine nuts");

    expect(
      screen.getByRole("heading", { name: "Sweet Basil" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Fresh Garlic" }),
    ).not.toBeInTheDocument();
  });
});
