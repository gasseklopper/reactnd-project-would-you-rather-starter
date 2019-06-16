import React from 'react'
import AnsweredCard from "../components/question/AnsweredCard";

import { Container, Header } from 'semantic-ui-react';

const AddPoll = () => {
	return(
		<Container>
			<Header as='h1'>Answered question</Header>
			<AnsweredCard ></AnsweredCard>
		</Container>
	)
}

export default AddPoll
