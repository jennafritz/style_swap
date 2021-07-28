import Container from 'react-bootstrap/esm/Container'
import SwapsJoinedComponent from '../Components/SwapsJoinedComponent'
import SwapsUnjoinedAvailableComponent from '../Components/SwapsUnjoinedAvailableComponent'

function SwapListContainer() {
    return(
        <Container>
            <SwapsJoinedComponent />
            <SwapsUnjoinedAvailableComponent />
        </Container>
    )
}

export default SwapListContainer