import Container from 'react-bootstrap/esm/Container'
import SwapEventClothingContainer from './SwapEventClothingContainer'
import SwapperListContainer from './SwapperListContainer'

function SwapEventContainer() {
    return(
        <Container>
            <SwapEventClothingContainer />
            <SwapperListContainer />
        </Container>
    )
}

export default SwapEventContainer