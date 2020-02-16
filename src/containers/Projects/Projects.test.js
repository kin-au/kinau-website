import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Projects";

test("Projects component renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Projects />
    </BrowserRouter>
  );
  const linkElement = getByText(/projects/i);
  expect(linkElement).toBeInTheDocument();
});
