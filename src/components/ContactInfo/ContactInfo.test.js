import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ContactInfo from "./ContactInfo";

test("ContactInfo component renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ContactInfo />
    </BrowserRouter>
  );
  const linkElement = getByText(/hello@kinau.co.uk/i);
  expect(linkElement).toBeInTheDocument();
});
