import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { fetchUser } from '../reducers/usersReducer'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

function LoginFormComponent() {

    const dispatch = useDispatch()
    const history = useHistory()

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        const key = event.target.name
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    const handleLogin = () => {
        dispatch(fetchUser(formData))
        .then(response => {
            if(response.payload.error){
                alert(response.payload.error)
            } else {
                localStorage.token = response.payload.token
                history.push("/home")
            }
        })
    }

return(
 <Container className="overallComponentContainer">
     <Form id="loginForm" onSubmit={event => {
          event.preventDefault()
          handleLogin()
          }}>
         <Form.Control 
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
            value={formData.username}
            placeholder='Username'
         />
         <Form.Control 
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder='Password'
         />
         <Form.Control className="submitInput" type="submit" value="Log In"/>
     </Form>
 </Container>
)

}

export default LoginFormComponent