import { render, screen } from "@testing-library/react";
import { MacBookProviders } from "../../providers/MacBookProviders";
import ProductInfos from "../ProductInfos";

describe("Product Infos", () => {
  test("Tester les informations initiales du produit", () => {
    render(<ProductInfos />, { wrapper: MacBookProviders });

    // Image
    const productImg = screen.getByRole("img", { name: /macbookAir/i });
    expect(productImg).toBeInTheDocument();

    // Nom du produit
    const productName = screen.getByRole("heading", {
      level: 5,
      name: /macbook air - gris sidéral/i,
    });
    expect(productName).toBeInTheDocument();

    // prix
    const productPrice = screen.getByRole("heading", { level: 4 });
    expect(productPrice).toBeInTheDocument();
    expect(productPrice).toHaveClass("green");
    expect(productPrice).toHaveTextContent("1 199,00 €");

    const productPrice2 = screen.getByText("€", { exact: false });
    expect(productPrice2).toBeInTheDocument();
    expect(productPrice).toHaveTextContent("1 199,00");

    // Heading description
    const titleDescription = screen.getByRole("heading", {
      level: 3,
      name: /Personnalisez votre MacBook air - gris sidéral/i,
    });
    expect(titleDescription).toBeInTheDocument();

    // <ul>
    const productInfoList = screen.getByRole("list");
    expect(productInfoList).toBeInTheDocument();

    // 7 <li>
    const productInfoItems = screen.getAllByRole("listitem");
    expect(productInfoItems.length).toBe(7);

    // Texte li
    // option 1
    expect(
      screen.getByText(
        "Puce Apple M1 avec CPU 8 cœurs, GPU 7 cœurs, Neural Engine 16 cœurs"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("8 Go de mémoire unifiée")).toBeInTheDocument();

    // option 2
    const featureListTexts = productInfoItems.map((item) => item.textContent);
    expect(featureListTexts).toEqual([
      "Puce Apple M1 avec CPU 8 cœurs, GPU 7 cœurs, Neural Engine 16 cœurs",
      "8 Go de mémoire unifiée",
      "SSD de 256 Go",
      "Écran Retina 13 pouces avec True Tone",
      "Deux ports Thunderbolt/USB 4",
      "Adaptateur secteur USB‑C 30 W",
      "Magic Keyboard rétroéclairé avec Touch ID - Français",
    ]);
  });
});
