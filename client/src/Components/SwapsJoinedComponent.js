import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/esm/Button"
import { setCurrentSwap } from "../reducers/swapsReducer"
import { deleteSwapClothing, fetchCurrentSwapClothings } from "../reducers/swapClothingsReducer"
import { setCurrentSwapUser } from "../reducers/swapUsersReducer"
import { fetchUserClothings, updateClothing } from "../reducers/clothingsReducer"

function SwapsJoinedComponent({swap}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const currentUser = useSelector(state => state.users.currentUser)
    const currentSwapSwapClothings = useSelector(state => state.swapClothings.currentSwapSwapClothings)

    const [ableToEnter, setAbleToEnter] = useState(swap.start <= new Date())
    const [ended, setEnded] = useState(swap.end <= new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setAbleToEnter(swap.start <= new Date())
            console.log("checking if ended, result:", ended, swap.id)
            if(!ended){
                console.log(ended)
                setEnded(swap.end <= new Date())
            } else {
                console.log("clearing interval")
                clearInterval(interval)
                closeoutSwap()
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    // should do an upcoming joined swaps section 
    // and a current joined swaps section ??

    const closeoutSwap = () => {
        dispatch(fetchCurrentSwapClothings(swap.id))
        .then((result) => {
            debugger
            if(currentSwapSwapClothings.length > 0){
                debugger
                currentSwapSwapClothings.forEach(swapClothing => {
                    dispatch(updateClothing({id: swapClothing.clothing_id, user_id: swapClothing.prev_owner_id}))
                    .then(response => {
                        if(response.payload.error){
                            alert(response.payload.error)
                        } else {
                            dispatch(deleteSwapClothing(swapClothing.id))
                            dispatch(fetchUserClothings(currentUser.id))
                        }
                    })
                })
            }
        })
    }

    return(
        <Container>
            {!ended 
            ?
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
                    dispatch(setCurrentSwap(swap.id)).then(() => {
                        dispatch(fetchCurrentSwapClothings(swap.id))
                        dispatch(setCurrentSwapUser({swap_id: swap.id, user_id: currentUser.id}))
                        history.push("/swap")
                    })                
                    }}>Enter Swap</Button>
                : null}
                </Container>
            :
            null
            // closeoutSwap()
            }
        </Container>
    )
}

export default SwapsJoinedComponent