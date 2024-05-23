const radioTipoID = () => {
  return (
    <form action="#" className="principalContainerRadioID">
      <div className="containerRadioID">
          <input type="radio" id="test1" name="radio-group" />
          <label htmlFor="test1" className="textTipoPasaporte">DNI</label>
      </div>

      <div className="containerRadioID">
          <input type="radio" id="test2" name="radio-group" />
          <label htmlFor="test2" className="textTipoPasaporte">NIE</label>
      </div>

      <div className="containerRadioIDPasaporte">
          <input type="radio" id="test3" name="radio-group" />
          <label htmlFor="test3" className="textTipoPasaporte">Pasaporte</label>
      </div>
    </form>
  );
};

export default radioTipoID;
