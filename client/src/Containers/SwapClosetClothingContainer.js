import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Container from 'react-bootstrap/esm/Container'
import ClothingComponent from '../Components/ClothingComponent'

function SwapClosetClothingContainer({toggleInclusionToSwap, checkIfInSwap}) {

    const currentUserClothings = useSelector(state => state.clothings.currentUserClothings)

    return(
        <Container>
            {currentUserClothings.map(clothing => (
                <ClothingComponent clothing={clothing} key={clothing.id} parent="swapClosetClothingContainer" toggleInclusionToSwap={toggleInclusionToSwap} checkIfInSwap={checkIfInSwap}/>
            ))}
        </Container>
    )
}

export default SwapClosetClothingContainer