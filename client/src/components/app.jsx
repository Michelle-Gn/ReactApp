import React from 'react';
import EmployeeData from './employeeData.jsx';
import treeData from '../../../SampleData.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      employees: treeData,
      rootView: true
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(){
    this.setState({
      rootView: !this.state.rootView
    })
  }

  render(){
    if (this.state.rootView){
      return (
        <div onClick={() => this.changeView()}>{this.state.employees[0].name}</div>
      )
    } else {
      return(
      <EmployeeData employees={this.state.employees} changeView={this.changeView}/>
    )}
  }
}

export default App;