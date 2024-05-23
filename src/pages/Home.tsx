import Pets from "../assets/pet-round.svg";
import Document from "../assets/id-card.svg";
import Cerrar from "../assets/close.svg";
import Atras from "../assets/back.svg";
import RadioAdopto from "../components/radioAdopto";
import RadioID from "../components/radioTipoID";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="topIcons">
        <img src={Atras} alt="atras" className="iconAtras" />
        <img src={Pets} alt="pet" className="principalIcon" />
        <img src={Cerrar} alt="cerrar" className="iconCerrar" />
      </div>

      <div className="textsDocument">
        <p className="textID">Documento del responsable de la adopcion</p>

        <div className="alertDocument">
          <p className="textAlertDocument">DEBES AÑADIR UN DOCUMENTO</p>
        </div>

        <img src={Document} alt="document" className="iconDocument" />

        <p className="informationText">
          Para iniciar la pre-adopcion, es necesario{" "}
          <strong>tener registrado un documento de identificacion.</strong>
        </p>
      </div>

      <div className="containerTextDocTit">
        <p className="textDocTitular">Titutlar del documento</p>
      </div>

      <RadioAdopto />

      <div className="containerTextTipoDoc">
        <p className="textTipoDoc">Tipo de documento</p>
      </div>
      <RadioID />

      <div className="containerTextNumDoc">
        <p className="textNumDoc">Indica el numero del documento</p>
      </div>
      <input type="text" className="inputNumID" />

      <button className="buttonAddDoc">Añadir documento</button>
    </div>
  );
};

export default Home;
