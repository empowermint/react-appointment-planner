import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TileList } from "./TileList";

const mockData = [
  {title: "Mock Turtles", description: "Summit meeting with the mock turles"},
  {title: "Therapy", description: "Will surely be required after meeting mock turtles"},
  {title: "Dinner", description: "Turtle soup on the menu?"}
]

test("Renders an list item for each object in recieved array", () => {
  render(<TileList display={mockData} />);
  const tiles = document.getElementsByTagName("li");
  expect(tiles.length).toEqual(mockData.length);
});

test("Passes each object to child Tile component as 'display' prop", () => {
  render(<TileList display={mockData} />);
  for (let i = 0; i < mockData.length; i++) {
    const title = mockData[i].title;
    expect(screen.getByText(title)).toBeDefined(); // TODO: Stop this test being dependent on <Tile>
  }
});
