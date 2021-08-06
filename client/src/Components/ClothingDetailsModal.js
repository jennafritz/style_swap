import ClothingDetailsComponent from "./ClothingDetailsComponent"
import Modal from 'react-bootstrap/Modal'

function ClothingDetailsModal(props) {

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton style={{border: "none", paddingBottom: "0rem"}}></Modal.Header>
            <Modal.Body>
                <ClothingDetailsComponent onHide={props.onHide}/>
            </Modal.Body>
        </Modal>
    )

}

export default ClothingDetailsModal