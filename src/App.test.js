import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { BrowserRouter } from "react-router-dom";
import App from "./App"

describe("app navigation", () => {
  beforeEach(() => render(<BrowserRouter><App /></BrowserRouter>))

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
})

test("adds valid contact to display list", () => {
  render(<BrowserRouter><App /></BrowserRouter>)

  // User navigates to contacts form and inputs valid contact:

  const contactsLink = screen.getByRole("link", {name: "Contacts"})
  userEvent.click(contactsLink)

  const nameInput = screen.getByLabelText(/Name/i)
  userEvent.type(nameInput, "Mock Turtle Society Secretary")

  const phoneInput = screen.getByLabelText(/Phone/i)
  userEvent.type(phoneInput, "01311234567")

  const emailInput = screen.getByLabelText(/Email/i)
  userEvent.type(emailInput, "secretary@mockturtles.io")

  const submitButton = screen.getByRole("button")
  userEvent.click(submitButton)

  // New contact information renders:

  expect(screen.getByText("Mock Turtle Society Secretary")).toBeInTheDocument()
  expect(screen.getByText("01311234567")).toBeInTheDocument()
  expect(screen.getByText("secretary@mockturtles.io")).toBeInTheDocument()
})
