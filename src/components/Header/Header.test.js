import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("Header component renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = getByText(/Full Stack Developer/i);
  expect(linkElement).toBeInTheDocument();
});
