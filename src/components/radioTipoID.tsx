type Props = {
  handleTipoDocumentoChange: () => void;
  texto: string;
};

const radioTipoID = ({ handleTipoDocumentoChange, texto }: Props) => {
  return (
    <div className="principalContainerRadioID">
      <input
        type="radio"
        id="test1"
        name="radio-group"
        onChange={handleTipoDocumentoChange}
      />
      <label htmlFor="test1" className="labelButton">
        <p className="textTipoDoc">{texto}</p>
      </label>
    </div>
  );
};

export default radioTipoID;
