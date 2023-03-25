import CapacityWrapper from "./CapacityWrapper";

const Capacity = ({ capacityType }) => {
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
