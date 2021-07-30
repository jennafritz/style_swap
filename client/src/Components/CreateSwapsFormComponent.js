import { useState } from "react"
import {useDispatch} from "react-redux"
import { createSwap } from "../reducers/swapsReducer"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/esm/Form"
import Row from "react-bootstrap/esm/Row"

function CreateSwapsFormComponent() {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        start: "",
        end: "",
        name: ""
    })

    const handleChange = (event) => {
        let key = event.target.id
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    const validSwap = (optimizedSwapObj) => {
        if((optimizedSwapObj.end > optimizedSwapObj.start) && (optimizedSwapObj.start > Date.now())){
            return true
        } else {
            return false
        }
    }
    
    const handleSubmitSwap = (swapObj) => {
        let optimizedSwapObj = {...swapObj, start: new Date(swapObj.start), end: new Date(swapObj.end)}
        if(validSwap(optimizedSwapObj)){
            dispatch(createSwap(swapObj))
            .then(response => {
                if(response.payload.error){
                    alert(response.payload.error)
                } else {
                    setFormData({
                        start: "",
                        end: "",
                        name: ""
                    })
                }
            })
        } else {
            if(optimizedSwapObj.end <= optimizedSwapObj.start){
                console.log("bad if end before swap")
                alert("Swap end must be later than start")
            } else if(optimizedSwapObj.start < Date.now()) {
                console.log("bad if already started")
                alert("Swap must be in the future")
            }
        }
    }

    return(
        <Container>
            <Row as="h2">Create a New Swap</Row>
            <Form onSubmit={(event) => {
                event.preventDefault()
                handleSubmitSwap(formData)
            }}>
                <Form.Label htmlFor="name">Swap Name</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    placeholder="Swap Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                />
                <Form.Label htmlFor="start">Start Time</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    placeholder="Start"
                    type="datetime-local"
                    id="start"
                    name="start"
                    value={formData.start}
                />
                <Form.Label htmlFor="name">End Time</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    placeholder="End"
                    type="datetime-local"
                    id="end"
                    name="end"
                    value={formData.end}
                />
                <Form.Control
                    type="submit"
                    value="Create"
                />
            </Form>
        </Container>
    )
}

export default CreateSwapsFormComponent