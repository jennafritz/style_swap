import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/esm/Image"
import Button from "react-bootstrap/esm/Button"
import { deleteClothing, fetchCurrentClosetClothings, fetchUserClothings } from "../reducers/clothingsReducer"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import ListGroup from 'react-bootstrap/ListGroup'

function ClothingDetailsComponent({onHide}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const spotlightClothing = useSelector(state => state.clothings.spotlightClothing)
    const currentUser = useSelector(state => state.users.currentUser)
    const currentClosetUser = useSelector(state => state.users.currentClosetUser)

    console.log(spotlightClothing)

    return(
        // <Container className="topLevelParentContainer" >
            <Container id="ClothingDetails" className="overallComponentContainer">
                <Row>
                    <Col >
                        <Image src={spotlightClothing.image_url} alt={spotlightClothing.name} height="300px"/>
                        <Row as="h3">{spotlightClothing.name}</Row>
                        <Row as="h6">{spotlightClothing.description}</Row>
                    </Col>
            
                    <Col>
                        <Row as="h3">Details</Row>
                        <ListGroup>
                            <ListGroup.Item className="detailsRow">Brand: {spotlightClothing.brand}</ListGroup.Item>
                            <ListGroup.Item className="detailsRow">Size: {spotlightClothing.size}</ListGroup.Item>
                            <ListGroup.Item className="detailsRow">Category: {spotlightClothing.category}</ListGroup.Item>
                            <ListGroup.Item className="detailsRow">Condition: {spotlightClothing.condition}</ListGroup.Item>
                            <ListGroup.Item className="detailsRow">Color: {spotlightClothing.color}</ListGroup.Item>
                            <ListGroup.Item className="detailsRow">Value: {spotlightClothing.value}</ListGroup.Item>
                        </ListGroup>
                        {currentClosetUser.id === currentUser.id
                        ?
                        <Button onClick={() => {
                            dispatch(deleteClothing(spotlightClothing.id))
                            .then(response => {
                                if(response.payload.error){
                                    alert(response.payload.error)
                                } else {
                                    dispatch(fetchCurrentClosetClothings(currentClosetUser.id))
                                    dispatch(fetchUserClothings(currentUser.id))
                                    onHide()
                                }
                            })
                            }}>
                        Delete This Piece
                        </Button>
                        : null
                        }
                    </Col>
                </Row>
                {/* <Button
                onClick={() => history.goBack()}
                >Go Back</Button> */}
            </Container>
        // </Container>
    )
}

export default ClothingDetailsComponent