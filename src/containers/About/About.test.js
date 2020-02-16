import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "./About";

test("About component renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  const linkElement = getByText(/Who am I/i);
  expect(linkElement).toBeInTheDocument();
});
