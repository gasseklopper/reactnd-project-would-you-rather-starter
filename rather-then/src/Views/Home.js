import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Polls from "../components/Polls";

const Home = () => {
	return(
  <Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Navigation/>
		 <Polls/>
		< Footer/>
      </Grid.Column>
    </Grid.Row>
  </Grid>


	)
}

export default Home
