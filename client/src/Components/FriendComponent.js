import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { fetchCurrentClosetClothings } from "../reducers/clothingsReducer"
import { setCurrentClosetUser } from "../reducers/usersReducer"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/esm/Card"

function FriendComponent({friend}) {

    const dispatch = useDispatch()
    const history = useHistory()

    return(
        <Card className="userCard">
            <Card.Img src={friend.image_url} alt={friend.username}/>
            <Card.Body>
                <Card.Title>{friend.username}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button
                onClick={() => {
                    dispatch(setCurrentClosetUser(friend.id))
                    dispatch(fetchCurrentClosetClothings(friend.id))
                    history.push("/closet")
                }}
                >
                    View Closet
                </Button>
            </Card.Footer>
        </Card>
    )
}

export default FriendComponent