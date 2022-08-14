import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContactForm } from "./ContactForm";

beforeEach(() => render(<ContactForm />));

test("Renders a form with onSubmit attribute set", () => {
  const form = screen.getByRole("form");
  expect(form).toBeVisible();

  const expectedAttribute = form.getAttribute("onSubmit");
  expect(expectedAttribute).toBeDefined();
});

test("Renders three managed input elements and a submit button", () => {
  const inputs = document.getElementsByTagName("input");
  expect(inputs.length).toBe(4);
  // TODO: Test the inputs are managed
  expect(screen.getByDisplayValue("Submit")).toBeInTheDocument();
});

test("Does not accept incorrect phone numbers", () => {
  // TODO: Find a way to test this
});
