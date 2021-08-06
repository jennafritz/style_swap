import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSwaps, fetchCurrentUserSwaps } from '../reducers/swapsReducer'
import SwapsJoinedComponent from '../Components/SwapsJoinedComponent'
import SwapsUnjoinedAvailableComponent from '../Components/SwapsUnjoinedAvailableComponent'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

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
        <Container id="SwapListContainer" className="overallComponentContainer">
            <Row as="h2" className="sectionTitle">Swap Events</Row>
            <Row>
                <Col>
                    <Row as="h3" >Swaps I am Participating In</Row>
                    {upcomingJoinedSwaps.length > 0
                    ? 
                        <Container className="swapList">
                            {upcomingJoinedSwaps.map(swap => (
                                <SwapsJoinedComponent swap={swap} key={swap.id} />
                            ))}
                        </Container>
                    : <Row as="h6">Join a Swap to Start Exploring New Styles!</Row>
                    }
                </Col>
                <Col>
                    <Row as="h3" >Swaps Available To Join</Row>
                    {upcomingUnjoinedSwaps.length > 0
                    ? 
                    <Container className="swapList">
                    {upcomingUnjoinedSwaps.map(swap => (
                        <SwapsUnjoinedAvailableComponent swap={swap} key={swap.id} />
                    ))}
                    </Container>
                    : <Row as="h6">
                        {currentUser.SwapsUnjoinedAvailableComponent
                        ? "It looks like there are no upcoming swaps to join. As an admin user, though, you can create a new event for swappers to join!"
                        : "It looks like there are no upcoming swaps to join. New events are always added, though, so check back soon!"
                        }
                        </Row>}
                </Col>
            </Row>
        </Container>
    )
}

export default SwapListContainer