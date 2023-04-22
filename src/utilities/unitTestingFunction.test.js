import { displayPrice, formatPrice, formatSsdString } from "./index";

describe("Unit Testing Functions", () => {
  test("displayPrice() formate correctement l'affichage du prix >0 et <1", () => {
    expect(displayPrice(230)).toBe("(230 €)");
    expect(displayPrice(460)).toBe("(460 €)");
    expect(displayPrice(0)).toBe("");
  });

  test("formatPrice() formate correctement l'affichage du prix du produit", () => {
    expect(formatPrice(1199.0)).toBe("1 199,00");
    expect(formatPrice(1199.45)).toBe("1 199,45");
    expect(formatPrice(1199.456)).toBe("1 199,46");
  });

  test("formatSsdString() formate les valeurs RAM & SSD pour les injecter dans les infos produits", () => {
    // "512ssd" => '512 Go' | "256ssd" => '256 Go'
    expect(formatSsdString("512ssd")).toBe("512 Go");
    expect(formatSsdString("256ssd")).toBe("256 Go");
    // "2tossd" => 2 To | "1tossd" => 1 To
    expect(formatSsdString("2tossd")).toBe("2 To");
    expect(formatSsdString("1tossd")).toBe("1 To");
  });
});
