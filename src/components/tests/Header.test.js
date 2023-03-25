import { render, screen } from "@testing-library/react";
import Header from "../Header";

test('H1 avec class fw-bold qui affiche le texte "MacBook Air"', () => {
  render(<Header />);
  const h1Element = screen.getByRole("heading", {
    name: "MacBook Air",
    level: 1,
  });
  expect(h1Element).toBeInTheDocument();
  expect(h1Element).toHaveClass("fw-bold");
});
