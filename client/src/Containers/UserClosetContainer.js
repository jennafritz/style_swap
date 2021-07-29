
import UserClothingContainer from './UserClothingContainer'
import AddClothingFormComponent from '../Components/AddClothingFormComponent'
import Container from 'react-bootstrap/esm/Container'

function UserClosetContainer() {
    
    return(
        <Container>
            <UserClothingContainer />
            <AddClothingFormComponent />
        </Container>
    )
}

export default UserClosetContainer