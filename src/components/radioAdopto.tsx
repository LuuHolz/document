import AdoptoParaMi from "../assets/dueno-de-una-mascota (1).png";
import AdoptoParaOtro from "../assets/dueno-de-una-mascota.png";

const radioAdopto = () => {
  return (
    <div className="containerRadioDoc">
      <div className="borderRadioDoc">
        <label htmlFor="paraMi" className="radioLabel">
          <img src={AdoptoParaMi} alt="AdoptoParaMi" className="iconAdopto" />
          <p>Adopto para mi</p>
        </label>
        <input type="radio" id="paraMi" name="adoptionType" />

      </div>

      <div className="borderRadioDoc">
        <label htmlFor="paraOtro" className="radioLabel">
          <img
            src={AdoptoParaOtro}
            alt="AdoptoParaOtro"
            className="iconAdopto"
          />
          <p>Adopto para alguien mas</p>
        </label>
        <input type="radio" id="paraOtro" name="adoptionType" />

      </div>
    </div>
  );
};

export default radioAdopto;
