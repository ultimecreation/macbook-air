import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { server } from "../../mocks/server";
import { render, screen, waitFor } from "../../test-utils";
import Configuration from "../Configuration";

test("Gestion des erreurs RAM et SSD", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/ram", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/ssd", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  // render(<Configuration />, { wrapper: MacBookProviders });
  render(<Configuration />);

  // Bootstrap Alert
  // FIND
  //   const alerts = await screen.findAllByRole("alert");
  //   expect(alerts).toHaveLength(2);

  //   const alerts = await screen.findAllByText("Nous avons une erreur");
  //   expect(alerts).toHaveLength(2);

  // Situation 1
  //screen.debug();

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });

  // Situation 2
  //screen.debug();
});

test("Mise à jour du prix et affichage infos Produit en fonction des capacités sélectionnées", async () => {
  const user = userEvent.setup();
  render(<Configuration />);

  // Récuperation des élements à tester
  // 1) Prix du produit
  const productPrice = screen.getByRole("heading", {
    level: 4,
    name: "1 199,00 €",
  });
  // 2) capacité RAM dans les infos Produits
  const ramCapacity = screen.getByText("8 Go de mémoire unifiée");
  // 3) capacité SSD dans les infos Produits
  const ssdCapacity = screen.getByText("SSD de 256 Go");

  // Attendre pour récupérer les 2 <options> (Async/await via axios)
  await waitFor(async () => {
    const allRamOptions = await screen.findAllByRole("option");
    expect(allRamOptions).toHaveLength(2);
  });

  // Récupérer les <select>
  const selectElement = screen.getByRole("combobox", {
    name: /default select/i,
  });
  //screen.debug();
  // Sélectionner "16 Go de mémoire unifiée (230 €)"
  await user.selectOptions(selectElement, "230");
  expect(selectElement.value).toBe("230");
  expect(
    screen.getByRole("option", {
      name: /16 Go de mémoire unifiée/i,
      exact: false,
    }).selected
  ).toBe(true);

  // screen.debug();
  // vérifier le prix du produit suite à la sélection
  expect(productPrice).toHaveTextContent("1 429,00");
});
