import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("renders MyComponent", () => {
  render(<MyComponent />);
  expect(screen.getByText(/some text/i)).toBeInTheDocument();
});
