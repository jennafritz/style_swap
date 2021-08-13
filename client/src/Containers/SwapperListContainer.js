import SwapperComponent from '../Components/SwapperComponent'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function SwapperListContainer({swappers}) {
    return(
        <Container className="overallComponentContainer">
            <Row as="h2" className="sectionTitle">Participating Swappers</Row>
            <Row md={4}>
            {swappers.map(swapper => (
                <SwapperComponent swapper={swapper} key={swapper.id}/>
            ))}
            </Row>
        </Container>
    )
}

export default SwapperListContainer