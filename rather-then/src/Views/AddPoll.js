import React from 'react'
import AddPollCard from "../components/AddPollCard";
import { Container, Header } from 'semantic-ui-react';

const AddPoll = () => {
	return(
<Container>
<Header as='h3'>Add question</Header>
<Header as='h1'>Would You Rather than?</Header>
<AddPollCard ></ AddPollCard>
</Container>


	)
}

export default AddPoll
