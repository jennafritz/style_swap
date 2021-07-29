import { useSelector } from 'react-redux'
import UserClothingContainer from './UserClothingContainer'
import AddClothingFormComponent from '../Components/AddClothingFormComponent'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function UserClosetContainer() {

    const currentUser = useSelector(state => state.users.currentUser)
    
    return(
        <Container>
            <Row as="h1">{`${currentUser.username}'s Closet`}</Row>
            <UserClothingContainer />
            <AddClothingFormComponent />
        </Container>
    )
}

export default UserClosetContainer