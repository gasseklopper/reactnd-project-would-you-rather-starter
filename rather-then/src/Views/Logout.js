import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Footer from "../components/Footer";

const Logout = () => {
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
							<Segment>Logout</Segment>
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

export default Logout
