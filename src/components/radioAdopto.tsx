import AdoptoParaMi from "../assets/dueno-de-una-mascota (1).png";
import AdoptoParaOtro from "../assets/dueno-de-una-mascota.png";

const radioAdopto = () => {
  return (
    <div>
      <div className="borderRadioDoc">
        <input type="radio" id="paraMi" name="adoptionType" />
        <label htmlFor="paraMi" className="radioLabel">
          <img src={AdoptoParaMi} alt="AdoptoParaMi" className="iconAdopto" />
          <p>Adopto para mi</p>
        </label>
      </div>

      <div className="borderRadioDoc">
        <input type="radio" id="paraOtro" name="adoptionType" />
        <label htmlFor="paraOtro" className="radioLabel">
          <img
            src={AdoptoParaOtro}
            alt="AdoptoParaOtro"
            className="iconAdopto"
          />
          <p>Adopto para alguien mas</p>
        </label>
      </div>
    </div>
  );
};

export default radioAdopto;
