import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { fetchUser } from '../reducers/usersReducer'
import {useHistory} from 'react-router-dom'

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
                console.log(response.payload.user)
                localStorage.token = response.payload.token
                history.push("/home")
            }
        })
    }

return(
 <Container>
     <Form onSubmit={event => {
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
         <Form.Control textAlign="center" className="submit-button" type="submit" value="Log In"/>
     </Form>
 </Container>
)

}

export default LoginFormComponent