import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

test("Home component renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const linkElement = getByText(/Hi, I’m Kin/i);
  expect(linkElement).toBeInTheDocument();
});
