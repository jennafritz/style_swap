import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserClothings } from '../reducers/clothingsReducer'
import Container from 'react-bootstrap/esm/Container'
import ClothingComponent from '../Components/ClothingComponent'

function UserClothingContainer() {

    const dispatch = useDispatch()

    const currentClosetUser = useSelector(state => state.users.currentClosetUser)
    const currentClosetClothings = useSelector(state => state.clothings.currentClosetClothings)

    // useEffect(() => {
    //     dispatch(currentUserClothings(currentUser.id))
    // }, [])

    return(
        <Container>
            {currentClosetClothings.map((clothing) => (
            <ClothingComponent clothing={clothing} key={clothing.id} parent="userClothingContainer"/>
            ))}
        </Container>
    )
}

export default UserClothingContainer