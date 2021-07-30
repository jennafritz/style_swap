import { useDispatch, useSelector } from 'react-redux'
import { deleteSwapClothing, fetchCurrentSwapClothings } from "../reducers/swapClothingsReducer"
import { updateClothing } from "../reducers/clothingsReducer"
import { reduceCredits } from '../reducers/swapUsersReducer'
import ClothingComponent from '../Components/ClothingComponent'
import Container from 'react-bootstrap/esm/Container'

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
                })
            }
        })
    }

    return(
        <Container>
            {clothings.map(clothing => (
                <ClothingComponent clothing={clothing} key={clothing.id} parent="swapEventClothingContainer" handleTakeClothing={handleTakeClothing} credits={currentSwapUser.credits}/>
            ))}
        </Container>
    )
}

export default SwapEventClothingContainer