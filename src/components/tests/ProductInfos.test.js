import { render, screen } from "@testing-library/react";
import ProductInfos from "../ProductInfos";

describe("Product Infos", () => {
  test("Tester les informations initiales du produit", () => {
    render(<ProductInfos />);

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
  });
});
