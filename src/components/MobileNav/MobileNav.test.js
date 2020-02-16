import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MobileNav from "./MobileNav";

test("MobileNav component renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <MobileNav />
    </BrowserRouter>
  );
  const linkElement = getByText(/☰/i);
  expect(linkElement).toBeInTheDocument();
});
