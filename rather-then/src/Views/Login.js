import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import LoginDropdown from '../components/LoginDropdown';

const Login = () => {
	return(

					<Grid columns={1} divided>
						<Grid.Row stretched>
						<Grid.Column>
							<Header as='h1'>Login</Header>
							<LoginDropdown></LoginDropdown>
						</Grid.Column>
						</Grid.Row>
					</Grid>



	)
}

export default Login
