import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/esm/Card"

function FriendComponent({friend}) {
    return(
        <Container>
            <Card>
                <Card.Img src={friend.image_url} alt={friend.username}/>
                <Card.Body>
                    <Card.Title>{friend.username}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Button>
                        View Closet
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default FriendComponent