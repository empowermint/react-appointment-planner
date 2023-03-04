import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ContactPicker } from "./ContactPicker"

const mockContacts = [{name: "First Contact"}, {name: "Another Contact"}, {name: "Contact III"}]
const mockChangeHandler = () => {"Callback"}

beforeEach(() => render(<ContactPicker contacts={mockContacts} onChange={mockChangeHandler} />))

test("Renders <select> from array of contacts", () => {
  const select = screen.getByRole("combobox")
  const options = screen.getAllByRole("option")

  expect(select).toBeVisible()
  expect(options.length).toEqual(4)
  expect(options[0].value).toEqual("None")
  expect(options[1].value).toEqual("First Contact")
  expect(screen.getByText("Another Contact")).toBeInTheDocument()
})

test("Has onChange", async () => {
  const select = screen.getByRole("combobox")
  const onChange = select.getAttribute("onChange")

  expect(onChange).toBeDefined();
})
