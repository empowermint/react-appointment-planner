import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tile } from "./Tile";

const mockData = {
  title: "Mock Appointment",
  date: "1st January 1970",
  time: "6am",
  description: "Diplomatic meeting with the mock turles"
}

const mockDataKeys = Object.keys(mockData);

test('Displays passed object values, once each', () => {
  render(<Tile display={mockData} />)
  for (let i = 0; i < mockDataKeys.length; i++) {
    const expectedText = mockData[mockDataKeys[i]]; // Dot notation doesn't work here
    expect(screen.getByText(expectedText)).toBeDefined();
  }
})

test('Gives first item class "tile-title"', () => {
  render(<Tile display={mockData} />);
  const expectedRender = screen.getByText(mockData[mockDataKeys[0]]);
  expect(expectedRender).toHaveClass("tile-title");
});

test.todo('Gives non-first items class "tile"')
