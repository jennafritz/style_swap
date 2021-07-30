import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/esm/Card"
import Button from "react-bootstrap/esm/Button"

function SwapperComponent({swapper}) {
    return(
        <Container>
            <Card>
                <Card.Img src={swapper.image_url} alt={swapper.username}/>
                <Card.Body>
                    <Card.Title>{swapper.username}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SwapperComponent