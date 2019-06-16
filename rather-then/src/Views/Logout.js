import React from 'react'
import { Button, Container, Message, Card } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const Logout = () => {
	return(
		<Container>
			<Card centered>
				<Card.Content>
					<Card.Header>Logout</Card.Header>
				</Card.Content>
				<Card.Content extra>
					<Message
						success
						header='Your logout was successful'
						content='You can log-in again here'
					/>
					<Container>
						<NavLink to="/login" exact>
							<Button fluid>Login Page</Button>
						</NavLink>
					</Container>
				</Card.Content>
			</Card>
		</Container>
	)
}

export default Logout
