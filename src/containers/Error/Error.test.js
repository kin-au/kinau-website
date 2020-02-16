import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error from "./Error";

test("Error component renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Error />
    </BrowserRouter>
  );
  const linkElement = getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});
