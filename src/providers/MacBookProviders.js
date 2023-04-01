import { useState } from "react";
import { MacBookContext } from "./context";

export const MacBookProviders = (props) => {
  const initialState = {
    capacityRam: "8 Go",
    capacityssd: "256 Go",
  };

  const [productInfos, setProductInfos] = useState(initialState);

  const value = { productInfos };

  return <MacBookContext.Provider value={value} {...props} />;
};
