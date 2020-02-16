import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("Navbar component renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const linkElement = getByText(/About Me/i);
  expect(linkElement).toBeInTheDocument();
});
