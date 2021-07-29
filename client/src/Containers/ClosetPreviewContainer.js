import {useEffect} from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import ClothingComponent from '../Components/ClothingComponent'
import { fetchUserClothings } from '../reducers/clothingsReducer'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/esm/Button'

function ClosetPreviewContainer() {

    const dispatch = useDispatch()
    const history = useHistory()

    const currentUser = useSelector(state => state.users.currentUser)
    const currentUserClothings = useSelector(state => state.clothings.currentUserClothings)

    useEffect(() => {
        dispatch(fetchUserClothings(currentUser.id))
    }, [])

    return(
        <Container>
            <Row as="h2">Current Styles</Row>
            <Row md={3}>
                {currentUserClothings.length > 0 
                ? currentUserClothings.map((clothing) => (
                    <ClothingComponent clothing={clothing} key={clothing.id} parent="closetPreviewContainer" />
                ))
                : null}
            </Row>
            <Button onClick={() => history.push("/closet")}>Browse Your Closet</Button>
        </Container>
    )
}

export default ClosetPreviewContainer