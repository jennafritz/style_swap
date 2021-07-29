import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserClothings } from '../reducers/clothingsReducer'
import Container from 'react-bootstrap/esm/Container'
import ClothingComponent from '../Components/ClothingComponent'

function UserClothingContainer() {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.users.currentUser)
    const currentUserClothings = useSelector(state => state.clothings.currentUserClothings)

    // useEffect(() => {
    //     dispatch(currentUserClothings(currentUser.id))
    // }, [])

    return(
        <Container>
            {currentUserClothings.map((clothing) => (
            <ClothingComponent clothing={clothing} key={clothing.id} parent="userClothingContainer"/>
            ))}
        </Container>
    )
}

export default UserClothingContainer