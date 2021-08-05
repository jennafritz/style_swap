import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserClothings } from '../reducers/clothingsReducer'
import Container from 'react-bootstrap/esm/Container'
import ClothingComponent from '../Components/ClothingComponent'
import Row from 'react-bootstrap/esm/Row'

function UserClothingContainer() {

    const dispatch = useDispatch()

    const currentClosetUser = useSelector(state => state.users.currentClosetUser)
    const currentClosetClothings = useSelector(state => state.clothings.currentClosetClothings)

    // useEffect(() => {
    //     dispatch(currentUserClothings(currentUser.id))
    // }, [])

    return(
        <Container className="overallComponentContainer">
            <Row md={4}>
                {currentClosetClothings.map((clothing) => (
                <ClothingComponent clothing={clothing} key={clothing.id} parent="userClothingContainer"/>
                ))}
            </Row>
        </Container>
    )
}

export default UserClothingContainer