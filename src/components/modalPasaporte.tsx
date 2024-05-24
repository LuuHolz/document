import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type Props = {
    show: boolean;
    handleClose: () => void;
}

const modalPasaporte = ({show, handleClose}: Props) => {
  return (
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className='titleModal'>IMPORTANTE</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>El número de pasaporte debe incluir las letras.</p>
      </Modal.Body>
    </Modal>
  </div>
  )
}

export default modalPasaporte