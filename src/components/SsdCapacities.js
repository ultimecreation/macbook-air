import { displayPrice } from "../utilities";

const SsdCapacities = ({
  id,
  price,
  handleSsdChangeFunc,
  selectedSsd,
  label,
}) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="ssd"
        id={id}
        value={price}
        checked={selectedSsd === price}
        onChange={handleSsdChangeFunc}
      />
      <label className="form-check-label" htmlFor={id}>
        {label} {displayPrice(price)}
      </label>
    </div>
  );
};

export default SsdCapacities;
