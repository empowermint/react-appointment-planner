import { render, screen } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

beforeEach(() => render(<ContactForm />));

test("Renders a form with onSubmit attribute set", () => {
  const forms = document.getElementsByTagName("form");
  expect(forms.length).toBe(1);
  const onSubmit = forms[0].getAttribute("onSubmit");
  expect(onSubmit).toBeDefined;
});

test.todo("Renders three managed input elements");

test.todo("Renders a submit button");

test.todo("Does not accept incorrect phone numbers");
