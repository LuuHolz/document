import { ChangeEvent, useState } from "react";
import Pets from "../assets/pet-round.svg";
import Document from "../assets/id-card.svg";
import Cerrar from "../assets/close.svg";
import Atras from "../assets/back.svg";
import RadioAdopto from "../components/radioAdopto";
import RadioID from "../components/radioTipoID";
import {validaDocumento} from "../utils/utils";

const Home = () => {
  const [seleccionado, setseleccionado] = useState(false);
  const [inputDocumento, setInputDocumento] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState({ error: '', status: false})

  const handleDocumentoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputDocumento(e.target.value)
    const resultado = validaDocumento(tipoDocumento, inputDocumento)

    if(resultado.resultado) setBtnDisabled({ error: '', status: true})
    else if(!resultado.resultado) setBtnDisabled({ error: resultado.error , status: false})

    console.log(resultado)


  };

  
  const handleTipoDocumentoChange = (numero: number) => {
    setTipoDocumento(numero)
  }


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

      <RadioID handleTipoDocumentoChange={handleTipoDocumentoChange}/>

      <div className="containerTextNumDoc">
        <p className="textNumDoc">Indica el numero del documento</p>
      </div>

      <input
        type="text"
        className="inputNumID"
        onChange={(e) => handleDocumentoChange(e)}
        value={inputDocumento}
        disabled={tipoDocumento === 0}
      />
      {
        !btnDisabled.status && <p>{btnDisabled.error}</p>
      }

      <button
        className="buttonAddDoc"
        onClick={() => buttonAdd()}
        disabled={seleccionado || !btnDisabled.status}
      >
        Añadir documento
      </button>
    </div>
  );
};

export default Home;
