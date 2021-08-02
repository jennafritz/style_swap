import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router'
import SwapEventClothingContainer from './SwapEventClothingContainer'
import SwapperListContainer from './SwapperListContainer'
import { fetchCurrentSwapClothings } from '../reducers/swapClothingsReducer'
import { setCurrentSwap } from '../reducers/swapsReducer'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/esm/Button'

function SwapEventContainer() {

    const dispatch = useDispatch()
    const history = useHistory()
    
    const currentSwap = useSelector(state => state.swaps.currentSwap)
    const currentUser = useSelector(state => state.users.currentUser)
    const currentSwapUser = useSelector(state => state.swapUsers.currentSwapUser)
    const currentSwapSwapClothings = useSelector(state => state.swapClothings.currentSwapClothings)
    
    // const [allSwapUsers, setAllSwapUsers] = useState([...currentSwap.swap_users])
    // const [currentSwapUser, setCurrentSwapUser] = useState(allSwapUsers.find(swapUser => swapUser.user_id === currentUser.id))
    const [clothingsInSwap, setClothingsInSwap] = useState([])
    
    // useEffect(() => {
    //         if(currentSwapSwapClothings && currentSwapSwapClothings.length > 0){
    //             setClothingsInSwap(currentSwapSwapClothings.map(swapClothing => swapClothing.clothing))
    //         }
    //         // dispatch(setCurrentSwap(currentSwap.id))
    // }, [currentSwapSwapClothings])

    useEffect(() => {
        setClothingsInSwap([...currentSwap.clothings])
    }, [currentSwap])

    // useEffect to update allSwapUsers and currentSwapUser?? but based on what?
    // might need to store currentSwapUser in Redux state...

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