import { render, screen } from "../../test-utils";
import Capacity from "../Capacity";

describe("Vérifier les capacités RAM et SSD", () => {
  test("Tester les informations relatives à la RAM", async () => {
    render(<Capacity capacityType="ram" />);

    // <p>
    const ramParagraph = screen.getByText(
      /sélectionnez la capacité de la mémoire/i
    );
    expect(ramParagraph).toBeInTheDocument();

    // <select>
    // const selectElement = screen.getByRole("combobox", {
    //   name: /Default select/i,
    // });
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    // 2 options <select>
    const allRamOptions = await screen.findAllByRole("option");
    expect(allRamOptions.length).toBe(2);
    expect(allRamOptions).toHaveLength(2);

    // "8 Go de mémoire unifié" Selected
    expect(
      screen.getByRole("option", { name: "8 Go de mémoire unifiée" }).selected
    ).toBe(true);
  });

  test("Tester les informations relatives à la SSD", async () => {
    render(<Capacity capacityType="ssd" />);

    // <p>
    const ssdParagraph = screen.getByText(
      /sélectionnez la capacité de stockage/i
    );
    expect(ssdParagraph).toBeInTheDocument();

    // <input> SSD de 256 Go selected
    const radioInput256 = await screen.findByRole("radio", {
      name: "SSD de 256 Go",
    });
    expect(radioInput256).toBeInTheDocument();
    expect(radioInput256).toBeChecked();

    // 3 more inputs
    const otherRadioInputs = await screen.findAllByRole("radio", {
      name: /.*\u20AC\)/,
    });
    expect(otherRadioInputs).toHaveLength(3);

    // All price
    const allInputPrices = otherRadioInputs.map((input) => input.value);
    expect(allInputPrices).toEqual(["230", "460", "920"]);
  });
});
