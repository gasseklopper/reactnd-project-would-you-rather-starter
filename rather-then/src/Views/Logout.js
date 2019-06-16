import React from 'react'
import { Button, Grid, Container, Message, Header } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const Logout = () => {
	return(
		<Container>
			<Grid columns={1} divided>
				<Grid.Row stretched>
				<Grid.Column>
					<Header as='h1'>Logout</Header>
					<Message
						success
						header='Your logout was successful'
						content='You can log-in again here'
					/>
					<Container>
						<NavLink to="/login" exact>
							<Button>Login</Button>
						</NavLink>
					</Container>
				</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	)
}

export default Logout
