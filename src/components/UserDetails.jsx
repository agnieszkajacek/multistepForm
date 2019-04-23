import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

class UserDetails extends Component {
  constructor(props){
    super(props)

    const fields = ['firstName', 'lastName', 'email'];
    this.changeHandlers = {};

    fields.forEach(field => this.changeHandlers[field] = this.props.handleChange(field));

  }

  saveAndContinue = (event) => {
    event.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values } = this.props;

    return(
      <Form>
        <h1 className="ui centered">User Details</h1>
        <Form.Field>
          <label>First Name</label>
          <Input 
            placeholder='First Name' 
            onChange={this.changeHandlers['firstName']}
            defaultValue={values.firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Input 
            placeholder='Last Name' 
            onChange={this.changeHandlers['lastName']}
            defaultValue={values.lastName}          
          />
        </Form.Field>
        <Form.Field>
          <label>Email Address</label>
          <Input 
            placeholder='Email Address' 
            onChange={this.changeHandlers['email']}
            defaultValue={values.email}
            />
        </Form.Field>
        <Button onClick={this.saveAndContinue} className="ui positive button">Next</Button>
      </Form>
    )
  }
}

export default UserDetails;
