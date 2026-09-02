import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { initialHistory } from "../data";
import { HistoryPanel } from "./HistoryPanel";

describe("HistoryPanel", () => {
  it("populates search input with the selected query text", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<HistoryPanel history={initialHistory} onSelect={onSelect} />);

    await user.click(
      screen.getByRole("button", {
        name: /Find recipes with chicken and basil/,
      }),
    );

    expect(onSelect).toHaveBeenCalledWith(
      "Find recipes with chicken and basil",
    );
  });
});
