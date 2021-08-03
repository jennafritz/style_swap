import {useDispatch} from 'react-redux'
import { setSpotlightClothing } from '../reducers/clothingsReducer'
import {useHistory} from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ClothingComponent({clothing, parent, toggleInclusionToSwap, checkIfInSwap, handleTakeClothing, credits}) {

    const dispatch = useDispatch()
    const history = useHistory()

    return(
        <Container>
            {clothing
            ?
            <Card>
                <Card.Img src={clothing.image_url} alt={clothing.name} />
                <Card.Body>
                    <Card.Title>{clothing.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    {(parent === "userClothingContainer" || parent === "swapClothingContainer")
                    ? <Button
                    onClick={() => {
                        dispatch(setSpotlightClothing(clothing.id))
                        .then(response => {
                            if(response.payload.error){
                                alert(response.payload.error)
                            } else{
                                history.push("/clothingDetails")
                            }
                    })}}
                    > 
                        View Details
                    </Button>
                    : null} 

                    {parent === "swapClosetClothingContainer"
                    ? <Button
                        onClick={() => toggleInclusionToSwap(clothing)}
                    >
                        {checkIfInSwap(clothing) ? 'Remove From Swap' : 'Add to Swap'}
                        </Button>
                    : null} 

                    {parent === "swapEventClothingContainer" 
                    ? <Button
                    // updates clothing to have user's id
                    onClick={() => {
                        if (credits > 0) {
                            handleTakeClothing(clothing.id)
                        } else {
                            alert("You don't have any credits left!")
                        }
                        }}
                    >Take</Button>
                    : null}
                </Card.Footer>
            </Card>
            : null}
        </Container>
    )
}

export default ClothingComponent