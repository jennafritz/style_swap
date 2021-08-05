import Container from 'react-bootstrap/esm/Container'
import SwapperComponent from '../Components/SwapperComponent'
import Row from 'react-bootstrap/esm/Row'

function SwapperListContainer({swappers}) {
    return(
        <Container className="overallComponentContainer">
            <Row as="h2" className="sectionTitle">Participating Swappers</Row>
            {swappers.map(swapper => (
                <SwapperComponent swapper={swapper} key={swapper.id}/>
            ))}
        </Container>
    )
}

export default SwapperListContainer