import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { BrowserRouter } from "react-router-dom";
import App from "./App"

beforeEach(() => render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
))

test("loads Contacts screen by default", () => {
  const page = screen.getByRole("heading", {name: "Contacts"})
  expect(page).toBeInTheDocument();
})

test("navigates between screens", async () => {
  const contactsLink = screen.getByRole("link", {name: "Contacts"})
  userEvent.click(contactsLink)

  const contactsPage = await screen.findByRole("heading", {name: "Contacts"})
  expect(contactsPage).toBeInTheDocument()

  const appointmentsLink = screen.getByRole("link", {name: "Appointments"})
  userEvent.click(appointmentsLink)

  const appointmentsPage = await screen.findByRole("heading", {name: "Appointments"})
  expect(appointmentsPage).toBeInTheDocument();
})
