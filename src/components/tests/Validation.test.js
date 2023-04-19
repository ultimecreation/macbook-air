import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Validation from "../Validation";

describe("Composant Validation", () => {
  // 'configurationStep' => 'confirmationStep' => 'cartStep'
  it("Bouton 'Valider' s'affiche correctement.", () => {
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

  test("Setter 'setStep' invoqué une seule fois pour passer à l'étape de confirmation", async () => {
    const user = userEvent.setup();

    const goToConfirmationStep = jest.fn();
    render(
      <Validation setStep={goToConfirmationStep} nextLevel="confirmationStep" />
    );

    const buttonConfirmation = screen.getByRole("button", { name: /valider/i });
    await user.click(buttonConfirmation);
    expect(goToConfirmationStep).toHaveBeenCalledTimes(1);
  });

  it("Setter 'setStep' invoqué une seule fois pour passer à l'étape de panier", async () => {
    const user = userEvent.setup();

    const goToCartStep = jest.fn();
    render(<Validation setStep={goToCartStep} nextLevel="cartStep" />);

    const buttonCart = screen.getByRole("button", {
      name: /ajouter au panier/i,
    });
    await user.click(buttonCart);
    expect(goToCartStep).toHaveBeenCalledTimes(1);
  });
});
