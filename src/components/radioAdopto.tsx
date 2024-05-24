type Props = {
  handleTipoTitularChange: () => void;
  imagen: string;
  text: string;
};

const radioAdopto = ({ handleTipoTitularChange, imagen, text }: Props) => {
  return (
    <div className="containerRadioDoc">
            <input
        type="radio"
        id="radio1"
        name="adoptionType"
        onChange={handleTipoTitularChange}
      />
      <label htmlFor="radio1" className="radioLabel">
        <img src={imagen} alt="AdoptoParaMi" className="iconAdopto" />
        <p>{text}</p>
      </label>
    </div>
  );
};

export default radioAdopto;
