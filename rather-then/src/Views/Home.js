import React from 'react'
import Polls from "../components/Polls";
import { Container, Header } from 'semantic-ui-react';

const Home = () => {
	return(
		<Container>
			<Header as='h1'>Would You Rather than </Header>
			<Header as='h3'>Answered and Unanswered Questions</Header>
			<Polls/>
		</Container>

	)
}

export default Home
