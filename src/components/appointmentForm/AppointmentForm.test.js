import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { AppointmentForm } from "./AppointmentForm"
import userEvent from "@testing-library/user-event"

const setTitle = jest.fn(), setContact = jest.fn(), setTime = jest.fn(), setDate = jest.fn(), handleSubmit = jest.fn()

beforeEach(() => render(<AppointmentForm contacts={["A", "B", "C"]} title="Mock Title" setTitle={setTitle} contact="A" setContact={setContact} date="01-01-2001" setDate={setDate} time="01:01" setTime={setTime} handleSubmit={handleSubmit} />))

test("Renders appointment form", () => {
  const form = screen.getByRole("form")
  expect(form).toBeVisible()

  // Three input elements:
  const inputs = document.querySelectorAll("input")
  expect(inputs.length).toBe(4)

  // const titleInput = screen.getByRole("textbox")
  // userEvent.type(titleInput, "New title")
  // expect(setTitle).toHaveBeenCalled()
  // expect(titleInput).toHaveDisplayValue("New title")

  // Contact picker:
  const select = screen.getByRole("combobox")
  expect(select).toBeVisible()
})

test("Renders submit button", () => {
  const submit = screen.getByRole("button")
  expect(submit).toBeVisible()
  userEvent.click(submit)
  expect(handleSubmit).toHaveBeenCalled()
})
