import Card from "react-bootstrap/esm/Card"

function SwapperComponent({swapper}) {
    return(
        <Card className="userCard">
            <Card.Img src={swapper.image_url} alt={swapper.username}/>
            <Card.Body>
                <Card.Title>{swapper.username}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default SwapperComponent