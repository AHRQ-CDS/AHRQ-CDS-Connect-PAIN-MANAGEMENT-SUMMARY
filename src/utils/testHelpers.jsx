import React from "react";
import PropTypes from "prop-types";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import createRouterContext from "react-router-test-context";

function customRender(ComponentClass, props = {}) {
  const context = createRouterContext();
  return render(<ComponentClass id="root" {...props} />, { context });
}

export { customRender as render, screen, userEvent };
