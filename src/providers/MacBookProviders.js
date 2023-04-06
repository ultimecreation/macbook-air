import { useState } from "react";
import { formatSsdString } from "../utilities";
import { MacBookContext } from "./context";

export const MacBookProviders = (props) => {
  const initialState = {
    macBookAirPrice: 1199.0,
    capacityRam: "8 Go",
    capacityssd: "256 Go",
    ram: 0,
    ssd: 0,
    inputssd: 0,
  };

  const [productInfos, setProductInfos] = useState(initialState);

  const handleRamChange = (event) => {
    const ramCapacity = parseInt(event.target.value);

    // console.log(event.target.options);
    // console.log(event.target.selectedIndex);
    const ramOption = event.target.options[event.target.selectedIndex].text;
    //console.log(rapOption);

    const ramQuantity = ramOption.substring(0, ramOption.indexOf("Go") + 2);
    // console.log(ramQuantity);

    setProductInfos((prevState) => ({
      ...prevState,
      capacityRam: ramQuantity,
      ram: ramCapacity,
    }));
  };

  const handleSsdChange = (event) => {
    const ssdCapacity = parseInt(event.target.value);

    // ID
    const ssdId = event.target.id;
    const formatedSsdString = formatSsdString(ssdId);

    setProductInfos((prevState) => ({
      ...prevState,
      capacityssd: formatedSsdString,
      ssd: ssdCapacity,
      inputssd: ssdCapacity,
    }));
  };

  const subtotal =
    productInfos.macBookAirPrice + (productInfos.ram + productInfos.ssd);

  const value = { subtotal, handleRamChange, handleSsdChange, productInfos };

  return <MacBookContext.Provider value={value} {...props} />;
};
