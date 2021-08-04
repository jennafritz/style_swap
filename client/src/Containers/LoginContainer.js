import { useState } from 'react'
import LoginFormComponent from '../Components/LoginFormComponent'
import RegisterFormComponent from '../Components/RegisterFormComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/esm/Button'

function LoginContainer() {

    const [loginStatus, setLoginStatus] = useState(true)

    return(
        <Container fluid className="topLevelParentContainer">
            <Row as="h1" id="welcomeHeader">Welcome to Style Swap</Row>

            <Row as="h3">{loginStatus ? "Please Log In to Continue" : "Sign Up to Get Started"}</Row>

            {loginStatus
            ?
            <LoginFormComponent />
            :
            <RegisterFormComponent />
            }

            <Row as="h4">
                {loginStatus
                ? "Not Yet a Swapper? Register to Get Started"
                :
                "Log In to Start Swapping"
                }
                </Row>
                <Row>
            <Button onClick={() => setLoginStatus(!loginStatus)}>{loginStatus ? "Register" : "Log In"}</Button>
            </Row>
        </Container>
    )
}

export default LoginContainer