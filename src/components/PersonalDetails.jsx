import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

class PersonalDetails extends Component {
  constructor(props){
    super(props)

    const fields = ['phoneNumber', 'street', 'city', 'country'];
    this.changeHandlers = {};

    fields.forEach(field => this.changeHandlers[field] = this.props.handleChange(field));

  }

  goBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  }

  saveAndContinue = (event) => {
    event.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values } = this.props;
    return(
      <Form>
        <h1 className="ui centered">Personal Details</h1>
        <Form.Field>
          <label>Phone Number</label>
          <Input 
            placeholder='Phone Number'
            onChange={this.changeHandlers['phoneNumber']}
            defaultValue={values.phoneNumber}
          />
        </Form.Field>
        <Form.Field>
          <label>Street</label>
          <Input 
            placeholder='Street'
            onChange={this.changeHandlers['street']}
            defaultValue={values.street}
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <Input 
            placeholder='City'
            onChange={this.changeHandlers['city']}
            defaultValue={values.city}
          />
        </Form.Field>
        <Form.Field>
          <label>Country</label>
          <Input 
            placeholder='Country'
            onChange={this.changeHandlers['country']}
            defaultValue={values.country}
          />
        </Form.Field>
        <Button.Group>
          <Button onClick={this.goBack} className="ui button">Back</Button>
          <Button.Or />
          <Button onClick={this.saveAndContinue} className="ui positive button">Save & Continue</Button>
        </Button.Group>
      </Form>
    )
  }
}

export default PersonalDetails;
