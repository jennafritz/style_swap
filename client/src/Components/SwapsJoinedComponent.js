import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/esm/Button"

function SwapsJoinedComponent({swap}) {

    const history = useHistory()

    const [ableToEnter, setAbleToEnter] = useState(swap.start <= new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setAbleToEnter(swap.start <= new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    // should do an upcoming joined swaps section 
    // and a current joined swaps section ??

    return(
        <Container>
            {swap.name}:{" "}
            {swap.start.toLocaleString("en-US", {
            timeStyle: "short",
            dateStyle: "medium",
            // timeZone: "EST",
            })}{" "}
            -{" "}
            {swap.end.toLocaleString("en-US", {
            timeStyle: "short",
            // timeZone: "EST",
            })}
            {ableToEnter
            ? <Button onClick={() => {
                history.push("/swap")
                }}>Enter Swap</Button>
            : null}
        </Container>
    )
}

export default SwapsJoinedComponent