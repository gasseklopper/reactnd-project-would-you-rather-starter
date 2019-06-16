import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

const PollCard = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew asks</Card.Header>
      <Card.Description>
       Would you rather write JavaScript or write Swift?
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
       <Button fluid>View Poll</Button>
    </Card.Content>
  </Card>
)

export default PollCard