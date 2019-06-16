import React from 'react'
import UnAnsweredCard from "../components/question/UnAnsweredCard";

import { Container, Header } from 'semantic-ui-react';

const AddPoll = () => {
	return(
		<Container>
			<Header as='h1'>Unanswered question</Header>
			<UnAnsweredCard ></ UnAnsweredCard>
		</Container>
	)
}

export default AddPoll
