import Container from "react-bootstrap/Container"
import { useSelector } from "react-redux"
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

function ProfileComponent() {

    const currentUser = useSelector(state => state.users.currentUser)

    return(
        <Container>
            <Row as="h1" style={{ backgroundColor: currentUser.spirit_color }}>{currentUser.username}</Row>
            <Image src={currentUser.image_url} alt="" />
            <Row as="h3">About Me:</Row>
            <Container>{currentUser.bio}</Container>
            {/* <Container style={{ backgroundColor: this.props.spirit_color }}>spirit</Container> */}
        </Container>
    )
}

export default ProfileComponent