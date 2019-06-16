import React from 'react'
import { Card, Container } from 'semantic-ui-react'
import LoginDropdown from '../components/LoginDropdown';

const Login = () => {
	return(
		<Container>
			<Card centered>
				<Card.Content>
					<Card.Header>Login</Card.Header>
				</Card.Content>
				<Card.Content extra>
						<LoginDropdown></LoginDropdown>
				</Card.Content>
			</Card>
		</Container>
	)
}

export default Login
