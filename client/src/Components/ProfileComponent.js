import Container from "react-bootstrap/Container"
import { useSelector } from "react-redux"
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from "react-bootstrap/esm/Col"

function ProfileComponent() {

    const currentUser = useSelector(state => state.users.currentUser)

    return(
        <Container id="ProfileComponent" className="overallComponentContainer" style={{border: `0.5rem solid ${currentUser.spirit_color}`, borderRadius: "2rem"}}>
            <Row>
                <Col>
                    <Image rounded src={currentUser.image_url} alt="profile picture"/>
                </Col>
                <Col>
                    <Row as="h1">{currentUser.username}</Row>
                    <Row as="h4">{currentUser.bio}</Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileComponent