import Pets from '../assets/mascotas.png';
import Document from '../assets/identificacionpng.png';
import AdoptoParaMi from '../assets/dueno-de-una-mascota (1).png';
import AdoptoParaOtro from '../assets/dueno-de-una-mascota.png'
import Cerrar from '../assets/cerrar.png';
import Atras from '../assets/atras.png'


const Home = () => {
  return (
    <div className='homeContainer'>
        <div>
            <img src={Atras} alt="" />
            <img src={Pets} alt="pet" className='principalIcon'/>
            <img src={Cerrar} alt="cerrar" className='iconCerrar'/>
        </div>
        <div>
            Documento del responsable de la adopcion
        </div>
        <div>
            DEBES AÑADIR UN DOCUMENTO
        </div>
        <img src={Document} alt="document" className='document'/>
        <div>
            <p>
                Para iniciar la pre-adopcion, es necesario tener registrado un documento de identificacion.
            </p>
        </div>
        <div>
            <p>Titutlar del documento</p>
        </div>
        

    </div>
  )
}

export default Home