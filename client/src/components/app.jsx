import React from 'react';
import Tree from './employeeData.jsx';
import toppingOptions from '../../../SampleData.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toppings: toppingOptions
    };

  }

  render(){
    return(
      <Tree toppings={this.state.toppings}/>
      // <Tree toppings={this.state.toppings} />
    )}
};


export default App;

