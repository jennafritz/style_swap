import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import SwapClosetClothingContainer from './SwapClosetClothingContainer'
import { createSwapClothings } from '../reducers/swapClothingsReducer'
import { createSwapUser } from '../reducers/swapUsersReducer'
import { removeUserIdFromClothing } from '../reducers/clothingsReducer'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function SwapClosetContainer() {

    const dispatch = useDispatch()
    const history = useHistory()

    const [clothingsToSwap, setClothingsToSwap] = useState([])

    const currentUser = useSelector(state => state.users.currentUser)
    const currentSwap = useSelector(state => state.swaps.currentSwap)

    const checkIfInSwap = (clothingObj) => {
        let exists = clothingsToSwap.find(clothing => clothing.id === clothingObj.id)
        return exists ? true : false
    }

    const toggleInclusionToSwap = (clothingObj) => {
        if(checkIfInSwap(clothingObj)){
          let updatedClothingsToSwap = clothingsToSwap.filter(clothing => clothing.id !== clothingObj.id)
          setClothingsToSwap(updatedClothingsToSwap)
        } else {
            setClothingsToSwap([...clothingsToSwap, clothingObj])
        }
    }

    return(
        <Container>
            <Row as="h1">Swap Your Clothes</Row>
            <SwapClosetClothingContainer toggleInclusionToSwap={toggleInclusionToSwap} checkIfInSwap={checkIfInSwap}/>
            <Button onClick={() => {
                dispatch(createSwapUser({user_id: currentUser.id, swap_id: currentSwap.id, credits: clothingsToSwap.length}))
                .then(result => {
                    if(result.payload.error){
                        alert(result.payload.error)
                    } else {
                        dispatch(createSwapClothings({array: clothingsToSwap, swap_id: currentSwap.id}))
                        .then(result => {
                            if(result.payload.error){
                                alert(result.payload.error)
                            } else {
                                dispatch(removeUserIdFromClothing({array: clothingsToSwap})).then(() => history.push("/home"))
                            }
                        })
                    }
                })
            }}>Submit</Button>
        </Container>
    )
}

export default SwapClosetContainer