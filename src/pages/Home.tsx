import Pets from "../assets/mascotas.png";
import Document from "../assets/id-card-svgrepo-com.svg";
import Cerrar from "../assets/cerrar.png";
import Atras from "../assets/atras.png";
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

      <div className="textID">Documento del responsable de la adopcion</div>

      <div className="alertDocument">
        <p className="textAlertDocument">DEBES AÑADIR UN DOCUMENTO</p>
      </div>

      <div>
        <img src={Document} alt="document" className="iconDocument" />
      </div>

      <div>
        <p>
          Para iniciar la pre-adopcion, es necesario{" "}
          <strong>tener registrado un documento de identificacion.</strong>
        </p>
      </div>

      <div>
        <p className="textDocTitular">Titutlar del documento</p>
      </div>

      <RadioAdopto />

      <p>Tipo de documento</p>
      <RadioID />

      <p className="textNumDoc">Indica el numero del documento</p>
      <input type="number" className="inputNumID"/>

      <button className="buttonAddDoc">Añadir documento</button>
    </div>
  );
};

export default Home;
