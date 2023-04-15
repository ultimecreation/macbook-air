import { render, screen } from "@testing-library/react";
import Validation from "../Validation";

describe("Composant Validation", () => {
  // 'configurationStep' => 'confirmationStep' => 'cartStep'
  test("Bouton 'Valider' s'affiche correctement", () => {
    render(<Validation nextLevel="confirmationStep" />);
    const buttonConfirmation = screen.getByRole("button", { name: /valider/i });
    expect(buttonConfirmation).toBeInTheDocument();
  });

  test("Bouton 'Ajouter au panier' s'affiche correctement", () => {
    render(<Validation nextLevel="cartStep" />);
    const buttonCart = screen.getByRole("button", {
      name: /ajouter au panier/i,
    });
    expect(buttonCart).toBeInTheDocument();
  });
});
