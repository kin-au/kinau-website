import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Contact from "./Contact";

test("Contact component renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
  const linkElement = getByText(/hello@kinau.co.uk/i);
  expect(linkElement).toBeInTheDocument();
});
