import React from 'react'
import { Button, Form, Message, Container } from 'semantic-ui-react'

const UserOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '../images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: 'https://semantic-ui.com/images/avatar2/large/molly.png' },
  }
]

const LoginDropdown = () => (
  <Container>

    <Form>
    <Form.Dropdown
      placeholder='Select User'
      fluid
      selection
      options={UserOptions}
    />
    <Message
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <Button fluid>Login</Button>
  </Form>
  </Container>

)

export default LoginDropdown