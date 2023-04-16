import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Happy Path Testing
test("Chemin heureux de Configuration Macbook Air", async () => {
  const user = userEvent.setup();
  render(<App />);

  // 1) Prix du produit
  const productPrice = screen.getByRole("heading", { level: 4 });
  // 2) Capacité RAM dans les infos du produit.
  const ramCapacity = screen.getByText("8 Go de mémoire unifiée");
  // 3) Capacité SSD dans les infos produit.
  const ssdCapacity = screen.getByText("SSD de 256 Go");

  // Attendre pour récupérer les 2 <options>. (Axios - async/await)
  await waitFor(async () => {
    const allRamOptions = await screen.findAllByRole("option");
    expect(allRamOptions).toHaveLength(2);
  });

  // Récupérer le <select>
  const selectElement = screen.getByRole("combobox", {
    name: /default select/i,
  });

  // Sélectionner "16 Go de mémoire unifiée (230 €)"
  await user.selectOptions(selectElement, "230");
  expect(selectElement.value).toBe("230");
  expect(
    screen.getByRole("option", {
      name: /16 Go de mémoire unifiée/i,
      exact: false,
    }).selected
  ).toBe(true);

  // Vérifier le prix du produit, suite à cette sélection.
  expect(productPrice).toHaveTextContent("1 429,00 €");

  // Vérifier le changement de la capacité RAM dans les informations du produit:
  // "8 Go de mémoire unifiée" => "16 Go de mémoire unifiée"
  expect(ramCapacity).toHaveTextContent("16 Go de mémoire unifiée");

  // Cocher "SSD de 512 Go (230,00 €)"
  // Là aussi, on patiente pour récupérer la data à afficher via axios (async/await)
  const inputSsd512 = await screen.findByLabelText("SSD de 512 Go", {
    exact: false,
  });
  await user.click(inputSsd512);

  // Vérifier que l'élément est coché, suite au click.
  expect(inputSsd512).toBeChecked();

  /* 
  Revérifier le prix du produit, suite à ce check du input. 
  1 199,00 + (230€ de RAM via le précédent select) + (230 SSD avec le clic) = 1659,00€
  */
  expect(productPrice).toHaveTextContent("1 659,00 €");

  // Vérifier le changement de la capacité SSD suite à la sélection de "SSD de 512 Go"
  // "SSD de 256 Go" => "SSD de 512 Go"
  expect(ssdCapacity).toHaveTextContent("SSD de 512 Go");

  // Cliquer sur le bouton pour valider la configuration
  const validationButton = screen.getByRole("button", { name: /Valider/i });
  expect(validationButton).toHaveStyle({ borderRadius: "7px", width: "200px" });
  expect(validationButton).toHaveClass("btn-success");
  await user.click(validationButton);

  // Redirection vera la page Confirmation.js
  const thankYouElement = await screen.findByRole("heading", {
    name: /bravo. voici votre configuration finale !/i,
  });
  expect(thankYouElement).toBeInTheDocument();

  // Vérifie que la liste contient bien les 7 éléments
  const productInfoItems = screen.getAllByRole("listitem");
  expect(productInfoItems.length).toBe(7);

  // Vérifier les informations relatives à la configuration finale
  const featureListTexts = productInfoItems.map((item) => item.textContent);
  expect(featureListTexts).toEqual([
    "Puce Apple M1 avec CPU 8 cœurs, GPU 7 cœurs, Neural Engine 16 cœurs",
    "16 Go de mémoire unifiée",
    "SSD de 512 Go",
    "Écran Retina 13 pouces avec True Tone",
    "Deux ports Thunderbolt/USB 4",
    "Adaptateur secteur USB-C 30 W",
    "Magic Keyboard rétroéclairé avec Touch ID - Français",
  ]);

  // Sous-total
  const subtotal = screen.getByRole("heading", { level: 4 });
  expect(subtotal).toHaveTextContent("1 659,00 €");

  // Vérifier le bouton de redirection vers le panier !
  const addToCartBtn = screen.getByRole("button", {
    name: /ajouter au panier/i,
  });
  expect(addToCartBtn).toHaveStyle({ borderRadius: "7px", width: "200px" });
  expect(addToCartBtn).toHaveClass("btn-success");
  expect(addToCartBtn).toBeInTheDocument();

  // Cliquer sur le bouton
  await user.click(addToCartBtn);

  // Redirection vers le PANIER et vérification du titre
  const cartTitle = screen.getByRole("heading", { name: /panier/i });
  expect(cartTitle).toBeInTheDocument();
});
