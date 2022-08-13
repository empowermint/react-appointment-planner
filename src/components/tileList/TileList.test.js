import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TileList } from "./TileList";
import { AppointmentsPage } from "../../containers/appointmentsPage/AppointmentsPage";

const mockData = [
  {title: "Mock Turtles", description: "Summit meeting with the mock turles"},
  {title: "Therapy", description: "Will surely be required after meeting mock turtles"},
  {title: "Dinner", description: "Turtle soup on the menu?"}
]

test.todo('Renders a Tile component for each object in recieved array');

test.todo('Passes each object to Tile component');
