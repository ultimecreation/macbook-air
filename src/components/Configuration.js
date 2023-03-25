import React from "react";
import Capacity from "./Capacity";
import ProductInfos from "./ProductInfos";

const Configuration = () => {
  return (
    <>
      <ProductInfos />
      <Capacity capacityType="ram" />
      <Capacity capacityType="ssd" />
    </>
  );
};

export default Configuration;
