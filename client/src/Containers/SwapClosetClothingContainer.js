import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Container from 'react-bootstrap/esm/Container'
import ClothingComponent from '../Components/ClothingComponent'
import Row from 'react-bootstrap/esm/Row'

function SwapClosetClothingContainer({toggleInclusionToSwap, checkIfInSwap}) {

    const currentUserClothings = useSelector(state => state.clothings.currentUserClothings)

    return(
        <Container className="overallComponentContainer">
            <Row m={4}>
                {currentUserClothings.map(clothing => (
                    <ClothingComponent clothing={clothing} key={clothing.id} parent="swapClosetClothingContainer" toggleInclusionToSwap={toggleInclusionToSwap} checkIfInSwap={checkIfInSwap}/>
                ))}
            </Row>
        </Container>
    )
}

export default SwapClosetClothingContainer