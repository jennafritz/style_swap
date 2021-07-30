import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SwapsJoinedComponent from '../Components/SwapsJoinedComponent'
import SwapsUnjoinedAvailableComponent from '../Components/SwapsUnjoinedAvailableComponent'
import { fetchAllSwaps, fetchCurrentUserSwaps } from '../reducers/swapsReducer'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function SwapListContainer() {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.users.currentUser)
    const allSwaps = useSelector(state => state.swaps.allSwaps)
    const currentUserSwaps = useSelector(state => state.swaps.currentUserSwaps)

    useEffect(() => {
        dispatch(fetchAllSwaps())
        dispatch(fetchCurrentUserSwaps(currentUser.id))
    }, [])

    let optimizedAllSwaps = allSwaps.map(swap => ({
        ...swap,
        start: new Date(swap.start),
        end: new Date(swap.end)
    }))

    let optimizedCurrentUserSwaps = currentUserSwaps.map(swap => ({
        ...swap,
        start: new Date(swap.start),
        end: new Date(swap.end)
    }))

    let upcomingJoinedSwaps = optimizedCurrentUserSwaps.filter(swap => swap.end > new Date())
    upcomingJoinedSwaps.sort((swapA, swapB) => {
        return swapA.start < swapB.start
    })

    let allUnjoinedSwaps = [...optimizedAllSwaps]
    optimizedCurrentUserSwaps.forEach(currentUserSwap => {
        let index = allUnjoinedSwaps.findIndex(element => element.id === currentUserSwap.id)
        allUnjoinedSwaps.splice(index, 1)
    })
    let upcomingUnjoinedSwaps = allUnjoinedSwaps.filter(swap => swap.start > new Date())
    upcomingUnjoinedSwaps.sort((swapA, swapB) => {
        return swapA.start < swapB.start
    })

    return(
        <Container>
            {upcomingJoinedSwaps.length > 0
            ? <Row as="h2">Swaps I am Participating In</Row>
            : null}
            {upcomingJoinedSwaps.map(swap => (
                <SwapsJoinedComponent swap={swap} key={swap.id} />
            ))}
            {upcomingUnjoinedSwaps.length > 0
            ? <Row as="h2">Swaps Available To Join</Row>
            : null}
            {upcomingUnjoinedSwaps.map(swap => (
                <SwapsUnjoinedAvailableComponent swap={swap} key={swap.id} />
            ))}
        </Container>
    )
}

export default SwapListContainer