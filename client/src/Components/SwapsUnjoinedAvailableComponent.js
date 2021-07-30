import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { setCurrentSwap } from '../reducers/swapsReducer'
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/esm/Button"

function SwapsUnjoinedAvailableComponent({swap}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const [ableToJoin, setAbleToJoin] = useState(swap.start <= new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setAbleToJoin(swap.start >= new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])


    return(
        <Container>
            {ableToJoin
            ?
            <Container>
                {swap.name}:{" "}
                {swap.start.toLocaleString("en-US", {
                // timeZone: "EST",
                timeStyle: "short",
                dateStyle: "medium",
                })}{" "}
                -{" "}
                {swap.end.toLocaleString("en-US", {
                timeStyle: "short",
                // timeZone: "EST",
                })}
                <br></br>
                <Button onClick={() => {
                    dispatch(setCurrentSwap(swap.id)).then(() => history.push("/swapCloset"))
                }}
                >Join Swap</Button>
            </Container>
            : null}
        </Container>
    )
}

export default SwapsUnjoinedAvailableComponent