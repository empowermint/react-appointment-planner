import { render, getbyText } from "@testing-library/react"

const mockData = {
  title: "Mock Appointment",
  date: "1st January 1970",
  time: "6am",
  description: "Diplomatic meeting with the mock turles"
}

const mockDataKeys = mockData.keys();

test('Displays passed object values, once each', () => {
  render("<Tile display={mockData} />")
  for (let i = 0; i < mockDataKeys.length; i++) {
    const expectedText = mockData.mockDataKeys[i]
    expect(getbyText(expectedText)).toBe(true)
  }
})

test.todo('Gives first item class "tile-title"')

test.todo('Gives non-first items class "tile"')
