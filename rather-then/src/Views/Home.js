import React from 'react'
import Polls from "../components/Polls";
import { Container, Header, Button } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

const Home = () => {
	return(
		<Container>
			<Header as='h1'>Would You Rather than </Header>
			<Header as='h3'>Answered and Unanswered Questions</Header>
			<NavLink to="/question/answered" exact>
				<Button >Answered Page</Button>
			</NavLink>
			<NavLink to="/question/unanswered" exact>
				<Button >Unanswered Page</Button>
			</NavLink>
			<Polls/>
		</Container>

	)
}

export default Home
