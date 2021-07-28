import LoginFormComponent from '../Components/LoginFormComponent'
import RegisterFormComponent from '../Components/RegisterFormComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function LoginContainer() {
    return(
        <Container>
            <Row as="h1">Welcome to StyleSwap!</Row>
            <LoginFormComponent />
            <RegisterFormComponent />
        </Container>
    )
}

export default LoginContainer