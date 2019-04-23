import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import MainForm from './components/MainForm';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Container textAlign='center'>
          <MainForm />
        </Container>     
      </div>
    )
  }
}

export default App;
