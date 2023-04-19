const Validation = ({ setStep, nextLevel }) => {
  const handleNextStep = () => {
    setStep(nextLevel);
  };

  // let value;
  // if (nextLevel === "confirmationStep") {
  //   value = "Valider";
  // } else if (nextLevel === "cartStep") {
  //   value = "Ajouter au Panier";
  // }

  return (
    <div className="col-sm-12 mt-3 d-flex">
      <div className="ms-auto" style={{ borderRadius: "14px" }}>
        {nextLevel === "confirmationStep" && (
          <input
            type="button"
            value="Valider"
            className="btn mt-2 btn-success"
            style={{ borderRadius: "7px", width: "200px" }}
            onClick={handleNextStep}
          />
        )}

        {nextLevel === "cartStep" && (
          <input
            type="button"
            value="Ajouter au Panier"
            className="btn mt-2 btn-success"
            style={{ borderRadius: "7px", width: "200px" }}
            onClick={handleNextStep}
          />
        )}
      </div>
    </div>
  );
};

export default Validation;
