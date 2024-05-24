import { useState } from "react";

type Props = {
  handleTipoTitularChange: () => void;
  imagen: string;
  text: string;
};

const radioAdopto = ({ handleTipoTitularChange, imagen, text }: Props) => {
  return (
    <div className="containerRadioDoc">
      <label htmlFor="paraMi" className="radioLabel">
        <img src={imagen} alt="AdoptoParaMi" className="iconAdopto" />
        <p>{text}</p>
        <input
          type="radio"
          id="paraMi"
          name="adoptionType"
          onChange={handleTipoTitularChange}
        />
      </label>
    </div>
  );
};

export default radioAdopto;
