import axios from "axios";
import { useEffect, useState } from "react";
import CapacityWrapper from "./CapacityWrapper";

const Capacity = ({ capacityType }) => {
  const [items, setItems] = useState([]);
  console.log(items);

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
        console.log(error);
      });
  }, [capacityType]);

  return (
    <div>
      {capacityType === "ram" ? (
        <CapacityWrapper capacityType={capacityType}>
          List RAM capacities
        </CapacityWrapper>
      ) : (
        <CapacityWrapper capacityType={capacityType}>
          List SSD capacities
        </CapacityWrapper>
      )}
    </div>
  );
};

export default Capacity;
