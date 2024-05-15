import React from "react";
import { render } from "@testing-library/react";

import App from "../../containers/App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const { container } = render(<App />, div);
    expect(container.querySelector(".App")).toBeInTheDocument();
  });
});
