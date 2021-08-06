import { useSelector } from 'react-redux'
import ClothingComponent from '../Components/ClothingComponent'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function UserClothingContainer() {

    const currentClosetUser = useSelector(state => state.users.currentClosetUser)
    const currentClosetClothings = useSelector(state => state.clothings.currentClosetClothings)

    return(
        <Container className="overallComponentContainer">
            {currentClosetClothings.length > 0
            ?
            <Row md={4}>
                {currentClosetClothings.map((clothing) => (
                <ClothingComponent clothing={clothing} key={clothing.id} parent="userClothingContainer"/>
                ))}
            </Row>
            :
            <Row as="h4">{`Whoops! Looks like there are no clothes in ${currentClosetUser.username}'s closet right now`}</Row> }
        </Container>
    )
}

export default UserClothingContainer