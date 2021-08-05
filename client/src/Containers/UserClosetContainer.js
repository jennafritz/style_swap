import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import UserClothingContainer from './UserClothingContainer'
import AddClothingFormComponent from '../Components/AddClothingFormComponent'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'

function UserClosetContainer() {

    const history = useHistory()

    const currentUser = useSelector(state => state.users.currentUser)
    const currentClosetUser = useSelector(state => state.users.currentClosetUser)
    
    return(
        <Container className="topLevelParentContainer">
            <Row as="h1" className="sectionTitle">{`${currentClosetUser.username}'s Closet`}</Row>
            <UserClothingContainer />
            {currentUser.id === currentClosetUser.id
            ?
            <AddClothingFormComponent />
            : <Row as="h4">{`Whoops! Looks like ${currentClosetUser.username} doesn't have any styles to share right now.`}</Row> }
            <Button onClick={() => history.goBack()}>Go Back</Button>
        </Container>
    )
}

export default UserClosetContainer