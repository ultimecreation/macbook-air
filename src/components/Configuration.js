import React from "react";
import Capacity from "./Capacity";
import ProductInfos from "./ProductInfos";
import Validation from "./Validation";

const Configuration = ({ setStep }) => {
  return (
    <>
      <ProductInfos />
      <Capacity capacityType="ram" />
      <Capacity capacityType="ssd" />
      <Validation setStep={setStep} nextLevel="confirmationStep" />
    </>
  );
};

export default Configuration;
