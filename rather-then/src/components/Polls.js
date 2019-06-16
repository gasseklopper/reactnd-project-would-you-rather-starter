import React from 'react'
import { Label, Menu, Tab, Grid, Container } from 'semantic-ui-react'
import PollCard from "../components/PollCard";

const panes = [
  {
    menuItem: (
      <Menu.Item key='Answered'>
        Answered<Label>2</Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><PollCard/><PollCard/></Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item key='Unanswered'>
        Unanswered < Label > 4 < /Label>
      </Menu.Item>
    ),
    render: () =>
      <Tab.Pane>
<Container>
        <Grid center>
        <Grid.Row>
          <Grid.Column width={5}>
        < PollCard / >
          </Grid.Column>
          <Grid.Column width={5}>
            < PollCard / >
          </Grid.Column>
          <Grid.Column width={5}>
            < PollCard / >
          </Grid.Column>
          <Grid.Column width={5}>
            < PollCard / >
          </Grid.Column>
        </Grid.Row>
      </Grid>
</Container>
		  </Tab.Pane>,
  },
]

const Polls = () => <Tab panes={panes} />

export default Polls