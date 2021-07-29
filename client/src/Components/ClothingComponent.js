import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ClothingComponent({clothing, parent, toggleInclusionToSwap, checkIfInSwap}) {


    return(
        <Container>
            {clothing
            ?
            <Card>
                <Card.Img src={clothing.image_url} alt={clothing.name} />
                <Card.Body>
                    <Card.Title>{clothing.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    {(parent === "userClothingContainer" || parent === "swapClothingContainer")
                    ? <Button
                    // onClick={() => {
                    //     console.log(clothing.id)
                    //     this.getIndividualClothing(clothing.id);
                    // }}
                    > 
                        View Details
                    </Button>
                    : null} 

                    {parent === "swapClosetClothingContainer"
                    ? <Button
                        onClick={() => toggleInclusionToSwap(clothing)}
                    >
                        {checkIfInSwap(clothing) ? 'Remove From Swap' : 'Add to Swap'}
                        </Button>
                    : null} 

                    {parent === "swapClothingContainer" 
                    ? <Button
                    // // updates clothing to have user's id
                    // onClick={() => {
                    // if (credits > 0) {
                    //     takeClothing(clothing.id)
                    // } else {
                    //     alert("You don't have any credits left!")
                    // }
                    // reduceCredits()
                    // console.log('invoked')
                    // }}
                    >Take</Button>
                    : null}
                </Card.Footer>
            </Card>
            : null}
        </Container>
    )
}

export default ClothingComponent