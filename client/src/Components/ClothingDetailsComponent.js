import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/esm/Image"
import Button from "react-bootstrap/esm/Button"
import { deleteClothing, fetchCurrentClosetClothings, fetchUserClothings } from "../reducers/clothingsReducer"

function ClothingDetailsComponent() {

    const dispatch = useDispatch()
    const history = useHistory()

    const spotlightClothing = useSelector(state => state.clothings.spotlightClothing)
    const currentUser = useSelector(state => state.users.currentUser)
    const currentClosetUser = useSelector(state => state.users.currentClosetUser)

    console.log(spotlightClothing)

    return(
        <Container>
            {spotlightClothing.name}
            <Image src={spotlightClothing.image_url} alt={spotlightClothing.name} height="300px"/>
            <p>{spotlightClothing.description}</p>
            <p>Brand: {spotlightClothing.brand}</p>
            <p>Size: {spotlightClothing.size}</p>
            <p>Category: {spotlightClothing.category}</p>
            <p>Condition: {spotlightClothing.condition}</p>
            <p>Color: {spotlightClothing.color}</p>
            <p>Value: {spotlightClothing.value}</p>
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
                        history.goBack()
                    }
                })
                }}>
            Delete This Piece
            </Button>
            : null
            }
            <Button
            onClick={() => history.goBack()}
            >Go Back</Button>
        </Container>
    )
}

export default ClothingDetailsComponent