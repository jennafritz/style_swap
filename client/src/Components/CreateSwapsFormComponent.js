import { useState } from "react"
import {useDispatch} from "react-redux"
import { createSwap, fetchAllSwaps } from "../reducers/swapsReducer"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/esm/Form"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Button from "react-bootstrap/esm/Button"

function CreateSwapsFormComponent() {

    const dispatch = useDispatch()

    const [showForm, setShowForm] = useState(false)

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
                    setShowForm(!showForm)
                    dispatch(fetchAllSwaps)
                }
            })
        } else {
            if(optimizedSwapObj.end <= optimizedSwapObj.start){
                alert("Swap end must be later than start")
            } else if(optimizedSwapObj.start < Date.now()) {
                alert("Swap must be in the future")
            }
        }
    }

    return( 
        <>
        {showForm ?
            <Container className="overallComponentContainer">
                <Row as="h2" className="sectionTitle">Create a New Swap</Row>
                <Form onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmitSwap(formData)
                }}>
                    <Row className="inlineFormRow">
                        <Col md={3}>
                            <Form.Label htmlFor="name">Swap Name</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control 
                                onChange={handleChange}
                                placeholder="Swap Name"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                            />
                        </Col>
                    </Row>
    
                    <Row className="inlineFormRow">
                        <Col md={3}>
                            <Form.Label htmlFor="start">Start Time</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control 
                                onChange={handleChange}
                                type="datetime-local"
                                id="start"
                                name="start"
                                value={formData.start}
                            />
                        </Col>
                    </Row>
    
                    <Row className="inlineFormRow">
                        <Col md={3}>
                            <Form.Label htmlFor="name">End Time</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control 
                                onChange={handleChange}
                                type="datetime-local"
                                id="end"
                                name="end"
                                value={formData.end}
                            />
                        </Col>
                    </Row>
    
                    <Form.Control
                        className="submitInput"
                        type="submit"
                        value="Create"
                    />
                </Form>
            </Container>
            :
            <Container className="overallComponentContainer">
                <Row as="h3" className="sectionTitle">Planning a swap? Add your event to Style Swap below</Row>
                <Button onClick={() => setShowForm(!showForm)}>Add a Swap</Button>
            </Container>
            }
        </>            
    )
}

export default CreateSwapsFormComponent