import { useDispatch, useSelector } from 'react-redux'
import { deleteSwapClothing, fetchCurrentSwapClothings } from "../reducers/swapClothingsReducer"
import { updateClothing } from "../reducers/clothingsReducer"
import { reduceCredits } from '../reducers/swapUsersReducer'
import ClothingComponent from '../Components/ClothingComponent'
import Container from 'react-bootstrap/esm/Container'
import { setCurrentSwap } from '../reducers/swapsReducer'
import Row from 'react-bootstrap/esm/Row'

function SwapEventClothingContainer({clothings, currentSwapUser}) {

    const dispatch = useDispatch()

    const currentSwap = useSelector(state => state.swaps.currentSwap)
    const currentUser = useSelector(state => state.users.currentUser)

    const handleTakeClothing = (clothingId) => {
        let swapClothing = currentSwap.swap_clothings.find(swapClothing => swapClothing.clothing_id === clothingId)
        dispatch(updateClothing({id: clothingId, user_id: currentUser.id}))
        .then(response => {
            if(response.payload.error){
                alert(response.payload.error)
            } else {
                dispatch(deleteSwapClothing(swapClothing.id))
                .then(() => {
                    dispatch(fetchCurrentSwapClothings(currentSwap.id))
                    dispatch(reduceCredits({id: currentSwapUser.id, credits: currentSwapUser.credits}))
                    dispatch(setCurrentSwap(currentSwap.id))
                })
            }
        })
    }

    return(
        <Container className="overallComponentContainer">
            {clothings.length > 0
            ? <Row md={4}>
                {clothings.map(clothing => (
                    <ClothingComponent clothing={clothing} key={clothing.id} parent="swapEventClothingContainer" handleTakeClothing={handleTakeClothing} credits={currentSwapUser.credits}/>
                ))}
            </Row>
            : <Row as="h2">It looks like all the clothing in this swap has been claimed!</Row> }
        </Container>
    )
}

export default SwapEventClothingContainer