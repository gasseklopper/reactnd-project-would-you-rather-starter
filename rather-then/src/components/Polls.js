import React from 'react'
import { Label, Menu, Tab, Grid } from 'semantic-ui-react'
import PollCard from "../components/PollCard";

const panes = [
  {
    menuItem: (
      <Menu.Item key='messages'>
        Answered<Label>15</Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>Tab 1 Content<PollCard/></Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item key='messages'>
        Unanswered < Label > 15 < /Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>

  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
		< PollCard / >
      </Grid.Column>
      <Grid.Column width={8}>
< PollCard / >
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>

      </Grid.Column>
      <Grid.Column width={8}>

      </Grid.Column>
    </Grid.Row>
  </Grid>


		<PollCard/>
		< PollCard / >
			< PollCard / >
				< PollCard / >
		</Tab.Pane>,
  },
]

const Polls = () => <Tab panes={panes} />

export default Polls