import { useSelector } from 'react-redux'
import UserClothingContainer from './UserClothingContainer'
import AddClothingFormComponent from '../Components/AddClothingFormComponent'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function UserClosetContainer() {

    const currentClosetUser = useSelector(state => state.users.currentClosetUser)
    
    return(
        <Container>
            <Row as="h1">{`${currentClosetUser.username}'s Closet`}</Row>
            <UserClothingContainer />
            <AddClothingFormComponent />
        </Container>
    )
}

export default UserClosetContainer