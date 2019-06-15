import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Footer from "../components/Footer";

const Login = () => {
	return(
  <Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
					<Grid columns={2} divided>
						<Grid.Row stretched>
						<Grid.Column>
							<Segment>Login</Segment>
						</Grid.Column>
						<Grid.Column>
							<Segment>2</Segment>
						</Grid.Column>
						</Grid.Row>
					</Grid>
		< Footer/>
      </Grid.Column>
    </Grid.Row>
  </Grid>


	)
}

export default Login
