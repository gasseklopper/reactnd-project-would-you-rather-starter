import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const AddPollCard = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Input

        id='form-subcomponent-shorthand-input-option-one'
        label='Option One'
        placeholder='Please enter option one text here'
      />
      <Form.Input

        id='form-subcomponent-shorthand-input-option-two'
        label='Option Two'
        placeholder='Please enter option two text here'
      />
    </Form.Group>
    <Form.Field control={Button}>Submit</Form.Field>
  </Form>

)

export default AddPollCard
