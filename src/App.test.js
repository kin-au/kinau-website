import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("App component renders Kin's website", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Kin's website/i);
  expect(linkElement).toBeInTheDocument();
});
