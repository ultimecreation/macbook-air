import { displayPrice } from "../utilities";

const RamCapacities = ({ option, price }) => {
  return (
    <option value={price}>
      {option} {displayPrice(price)}
    </option>
  );
};

export default RamCapacities;
