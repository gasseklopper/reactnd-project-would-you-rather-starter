import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Leaderboard = () => {
	return(
  <Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Navigation/>
					<Grid columns={2} divided>
						<Grid.Row stretched>
						<Grid.Column>
							<Segment>Leaderboard</Segment>
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

export default Leaderboard
