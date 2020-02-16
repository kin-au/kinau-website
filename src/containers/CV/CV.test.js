import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CV from "./CV";

test("CV component renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <CV />
    </BrowserRouter>
  );
  const linkElement = getByText(/CV/i);
  expect(linkElement).toBeInTheDocument();
});
