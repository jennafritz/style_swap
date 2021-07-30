import Container from 'react-bootstrap/esm/Container'
import SwapperComponent from '../Components/SwapperComponent'

function SwapperListContainer({swappers}) {
    return(
        <Container>
            {swappers.map(swapper => (
                <SwapperComponent swapper={swapper} key={swapper.id}/>
            ))}
        </Container>
    )
}

export default SwapperListContainer