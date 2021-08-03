import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router'
import SwapEventClothingContainer from './SwapEventClothingContainer'
import SwapperListContainer from './SwapperListContainer'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/esm/Button'

function SwapEventContainer() {

    const dispatch = useDispatch()
    const history = useHistory()
    
    const currentSwap = useSelector(state => state.swaps.currentSwap)
    const currentSwapUser = useSelector(state => state.swapUsers.currentSwapUser)
    
    const [clothingsInSwap, setClothingsInSwap] = useState([])

    useEffect(() => {
        setClothingsInSwap([...currentSwap.clothings])
    }, [currentSwap])

    return(
        <Container>
            <Row as="h1">Clothing Swap</Row>
            <Row as="h5">Credits: {currentSwapUser.credits}</Row>
            <SwapEventClothingContainer clothings={clothingsInSwap} currentSwapUser={currentSwapUser}/>
            <SwapperListContainer swappers={currentSwap.users}/>
            <Button
                onClick={() => history.push("/home")}
            >Leave Swap</Button>
        </Container>
    )
}

export default SwapEventContainer