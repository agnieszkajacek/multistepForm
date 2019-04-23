import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component {
  saveAndContinue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  }

  goBack  = (event) => {
    event.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: { firstName, lastName, email, phoneNumber, street, city, country } } = this.props;
    return(
      <div>
        <h1 className="ui centered">Confirm your Details</h1>
        <List>
          <List.Item>
            <List.Icon name='user' />
            <List.Content>{firstName} {lastName}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' />
            <List.Content>
              <a href={`{mailto:${email}`}>{email}</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='phone' />
            <List.Content>{phoneNumber}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='marker' />
            <List.Content>{street}, {city}, {country}</List.Content>
          </List.Item>
        </List>

        <Button.Group>
          <Button onClick={this.goBack} className="ui button">Back</Button>
          <Button.Or />
          <Button onClick={this.saveAndContinue} className="ui positive button">Save & Continue</Button>
        </Button.Group>
      </div>
    )
  }
}
export default Confirmation;
