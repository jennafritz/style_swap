import Container from "react-bootstrap/Container"
import { useSelector } from "react-redux"
import { useHistory } from 'react-router'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from "react-bootstrap/esm/Col"
import Button from 'react-bootstrap/esm/Button'


function ProfileComponent() {

    const history = useHistory()

    const currentUser = useSelector(state => state.users.currentUser)

    return(
        <Container id="ProfileComponent" className="overallComponentContainer" style={{border: `0.5rem solid ${currentUser.spirit_color}`, borderRadius: "1rem"}}>
            <Button id="logoutButton" onClick={() => {
            localStorage.clear()
            history.push("/")
            }}>Log Out</Button>
            <Row>
                <Col md="auto" id="profileImageCol">
                    <Image id="profilePicture" rounded src={currentUser.image_url} alt="profile picture"/>
                </Col>
                <Col id="profileBioCol">
                    <Row as="h1">{currentUser.username}</Row>
                    <Row as="h4">{currentUser.bio}</Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileComponent