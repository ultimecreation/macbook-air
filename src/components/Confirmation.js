import React from "react";
import { useAndCheckMacBookDetails } from "../providers/useAndCheckMacBookDetails";
import { formatPrice } from "../utilities";
import Validation from "./Validation";

const Confirmation = ({ setStep }) => {
  const { subtotal, productInfos } = useAndCheckMacBookDetails();

  return (
    <>
      <div
        className="bg-white p-3 d-flex flex-column"
        style={{ borderRadius: "14px" }}
      >
        <h3 className="text-center">
          Bravo. Voici votre configuration finale !
        </h3>

        <ul className="list-unstyled mt-4">
          <li>
            Puce Apple M1 avec CPU 8 cœurs, GPU 7 cœurs, Neural Engine 16 cœurs
          </li>
          <li>{productInfos.capacityRam} de mémoire unifiée</li>
          <li>SSD de {productInfos.capacityssd}</li>
          <li>Écran Retina 13 pouces avec True Tone</li>
          <li>Deux ports Thunderbolt/USB 4</li>
          <li>Adaptateur secteur USB-C 30 W</li>
          <li>Magic Keyboard rétroéclairé avec Touch ID - Français</li>
        </ul>

        <h4>
          Sous-total:{" "}
          <span className="green">{`${formatPrice(subtotal)} €`}</span>
        </h4>
      </div>
      <Validation setStep={setStep} nextLevel="cartStep" />
    </>
  );
};

export default Confirmation;
