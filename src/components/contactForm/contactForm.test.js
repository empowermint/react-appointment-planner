import { render, screen } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

beforeEach(() => render(<ContactForm />));

test("Renders a form with onSubmit attribute set", () => {
  const forms = document.getElementsByTagName("form");
  expect(forms.length).toBe(1);
  const expectedAttribute = forms[0].getAttribute("onSubmit");
  expect(expectedAttribute).toBeDefined();
});

test("Renders three managed input elements", () => {
  const inputs = document.getElementsByTagName("input");
  expect(inputs.length).toBe(3);
  // TODO: Test the inputs are managed
});

test.todo("Renders a submit button");

test.todo("Does not accept incorrect phone numbers");
