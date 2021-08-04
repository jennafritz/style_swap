import { useState } from 'react'
import { createUser } from '../reducers/usersReducer'
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function RegisterFormContainer() {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        bio: "",
        image_url: "",
        spirit_color: ""
    })

    const handleChange = (event) => {
        const key = event.target.name
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    const handleRegister = () => {
        dispatch(createUser(formData))
        .then(response => {
            if(response.payload.error){
                alert(response.payload.error)
            } else {
                alert("Registration successful. Please log in to continue.")
            }
        })
    }

    return(
        <Container className="overallComponentContainer">
            <Form onSubmit={(event) => {
                event.preventDefault()
                handleRegister()
                }}>
                <Form.Control 
                    onChange={handleChange}
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    placeholder="Username"
                />
                <Form.Control 
                    onChange={handleChange}
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                />
                <Form.Control 
                    onChange={handleChange}
                    type="textarea" 
                    id="bio" 
                    name="bio" 
                    value={formData.bio}
                    placeholder='Bio'
                />
                <Form.Control 
                    onChange={handleChange}
                    type="text"
                    id="image_url"
                    name="image_url"
                    value={formData.image_url}
                    placeholder="Profile Picture"
                />
                <Row className="spiritColorRow">
                <Col md="auto">
                {/* <Form.Group> */}
                    <Form.Label htmlFor="spirit_color">Spirit Color</Form.Label>
                </Col>
                <Col>
                    <Form.Control 
                        onChange={handleChange}
                        type="color"
                        id="spirit_color"
                        name="spirit_color"
                        value={formData.spirit_color}
                        placeholder='Spirit Color'
                        // style={{minWidth: "100%"}}
                        />
                    </Col>
                </Row>
                {/* </Form.Group> */}
                <Form.Control 
                    className="submitInput"
                    type="submit" value="Register"
                />
            </Form>
        </Container>
    )

}

export default RegisterFormContainer