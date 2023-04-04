import axios from "axios";
import { useEffect, useState } from "react";
import { useAndCheckMacBookDetails } from "../providers/useAndCheckMacBookDetails";
import AlertNotification from "./AlertNotification";
import CapacityWrapper from "./CapacityWrapper";
import RamCapacities from "./RamCapacities";
import SsdCapacities from "./SsdCapacities";

const Capacity = ({ capacityType }) => {
  const [items, setItems] = useState([]);
  const [ssd, setSsd] = useState(0);
  const [error, setError] = useState(false);

  const { handleRamChange } = useAndCheckMacBookDetails();

  //console.log(items);

  const handleSsdChange = (e) => {
    setSsd(+e.target.value);
  };

  useEffect(() => {
    //     fetch(`http://localhost:3030/${capacityType}`)
    //       .then((res) => {
    //         return res.json();
    //       })
    //       .then((data) => {
    //         setItems(data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });

    axios
      .get(`http://localhost:3030/${capacityType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        setError("Error");
      });
  }, [capacityType]);

  if (error) {
    return <AlertNotification />;
  }

  return (
    <div>
      {capacityType === "ram" ? (
        <CapacityWrapper capacityType={capacityType}>
          <select
            className="form-select form-select-outline w-50"
            aria-label="Default select"
            onChange={handleRamChange}
          >
            {items.map((capacity) => {
              return (
                <RamCapacities
                  key={capacity.id}
                  option={capacity.option}
                  price={capacity.price}
                />
              );
            })}
          </select>
        </CapacityWrapper>
      ) : (
        <CapacityWrapper capacityType={capacityType}>
          {items.map((capacity) => {
            return (
              <SsdCapacities
                key={capacity.id}
                id={capacity.id}
                label={capacity.label}
                price={capacity.price}
                selectedSsd={ssd}
                handleSsdChangeFunc={handleSsdChange}
              />
            );
          })}
        </CapacityWrapper>
      )}
    </div>
  );
};

export default Capacity;
