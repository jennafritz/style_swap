import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../reducers/usersReducer'
import FriendComponent from '../Components/FriendComponent'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function FriendListContainer() {

    const dispatch = useDispatch()

    const allUsers = useSelector(state => state.users.allUsers)
    const currentUser = useSelector(state => state.users.currentUser)

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])

    let friendsArray = allUsers.filter(user => user.id !== currentUser.id)

    return(
        <Container className="overallComponentContainer">
            <Row as="h2">Get Some Style Inspiration</Row>
            <Row md={4}>
                {friendsArray.length > 0
                ? friendsArray.map(friend => (
                    <FriendComponent friend={friend} key={friend.id}/>
                ))
                : null}
            </Row>
        </Container>
    )
}

export default FriendListContainer