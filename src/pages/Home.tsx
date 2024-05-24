import { ChangeEvent, useState } from "react";
import Pets from "../assets/pet-round.svg";
import Document from "../assets/id-card.svg";
import Cerrar from "../assets/close.svg";
import Atras from "../assets/back.svg";
import RadioAdopto from "../components/radioAdopto";
import RadioID from "../components/radioTipoID";
import { validaDocumento } from "../utils/utils";
import { documentos } from "../utils/constants";
import { Documento, Titular } from "../models/constants.type";
import { titulares } from "../utils/constants";
import ModalPasaporte from "../components/modalPasaporte"

const Home = () => {
  const [inputDocumento, setInputDocumento] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState(0);
  const [tipoTitular, setTipoTitular] = useState("");
  const [btnDisabled, setBtnDisabled] = useState({ error: "", status: false });
  const [showModal, setShowModal] = useState(false);

  const handleDocumentoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valueInputActualizado = e.target.value;
    setInputDocumento(valueInputActualizado);
    const resultado = validaDocumento(tipoDocumento, valueInputActualizado);

    if (resultado.resultado) {
      setBtnDisabled({ error: "", status: true });
    } else if (!resultado.resultado) {
      setBtnDisabled({ error: resultado.error, status: false });
    } else if (valueInputActualizado === ""){
      setBtnDisabled({ error: "", status: false });
      return;
    } 
    
    if (tipoDocumento === 5 && valueInputActualizado === "444"){
      setShowModal(true);
    } else {
      setShowModal(false);
    }
    
  };

  const handleTipoDocumentoChange = (numero: number) => {
    setTipoDocumento(numero);
  };

  const handleTipoTitularChange = (valor: string) => {
    setTipoTitular(valor);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="homeContainer">
      <div className="topIcons">
        <img src={Atras} alt="atras" className="iconAtras" />
        <img src={Pets} alt="pet" className="principalIcon" />
        <img src={Cerrar} alt="cerrar" className="iconCerrar" />
      </div>

      <div className="textsDocument">
        <p className="textID">Documento del responsable de la adopción</p>

<div className="alertContainer">
<div className="alertDocument">
          <p className="textAlertDocument">DEBES AÑADIR UN DOCUMENTO</p>
        </div>
</div>


        <img src={Document} alt="document" className="iconDocument" />

        <p className="informationText">
          Para iniciar la pre-adopción, es necesario{" "}
          <strong>tener registrado un documento de identificación.</strong>
        </p>
      </div>

      <div className="containerTextDocTit">
        <p className="textDocTitular">Titutlar del documento</p>
      </div>

      <div className="containerTitulares">
        {titulares.map((titular: Titular) => {
          return (
            <RadioAdopto
              imagen={titular.imagen}
              text={titular.text}
              key={titular.key}
              handleTipoTitularChange={() =>
                handleTipoTitularChange(titular.valor)
              }
            />
          );
        })}
      </div>

      <div className="containerTextTipoDoc">
        <p className="textTipoDoc">Tipo de documento</p>
      </div>

      <div className="containerDocumentos">
        {documentos.map((documento: Documento) => {
          return (
            <RadioID
              handleTipoDocumentoChange={() =>
                handleTipoDocumentoChange(documento.valor)
              }
              texto={documento.text}
              key={documento.key}
            />
          );
        })}
      </div>

      <div className="containerTextNumDoc">
        <p className="textNumDoc">Indica el número del documento</p>
      </div>

      <input
        type="text"
        className="inputNumID"
        onChange={(e) => handleDocumentoChange(e)}
        value={inputDocumento}
        disabled={tipoDocumento === 0}
      />
      {!btnDisabled.status && <p className="inputError">{btnDisabled.error}</p>}

       <ModalPasaporte show={showModal} handleClose={handleCloseModal}/>

      <button className="buttonAddDoc" disabled={!btnDisabled.status}>
        Añadir documento
      </button>
    </div>
  );
};

export default Home;
