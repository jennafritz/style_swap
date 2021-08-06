import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { setSpotlightClothing } from '../reducers/clothingsReducer'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ClothingDetailsModal from './ClothingDetailsModal'

function ClothingComponent({clothing, parent, toggleInclusionToSwap, checkIfInSwap, handleTakeClothing, credits}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const [modalShow, setModalShow] = useState(false)

    return(
        <>
            <Card id="ClothingComponent" style={parent === "closetPreviewContainer" ? {maxHeight: "15rem"} :  null}>
                <Card.Img style={parent !== "closetPreviewContainer" ? {maxHeight: "15rem"} :  {maxHeight: "80%"}} src={clothing.image_url} alt={clothing.name} />
                <Card.Body>
                    <Card.Title>{clothing.name}</Card.Title>
                </Card.Body>
                {parent === "closetPreviewContainer"
                ? null
                :
                <Card.Footer>
                    {(parent === "userClothingContainer" || parent === "swapClothingContainer")
                    ? <Button
                    onClick={() => {
                        dispatch(setSpotlightClothing(clothing.id))
                        .then(response => {
                            if(response.payload.error){
                                alert(response.payload.error)
                            } else{
                                // history.push("/clothingDetails")
                                setModalShow(true)
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
                }
            </Card>
            <ClothingDetailsModal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
}

export default ClothingComponent