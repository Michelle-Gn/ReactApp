// Create Tree component

import React from 'react';

let Tree = function (props) {
  return (
    <div>
      {props.toppings.map((item, index) => (
        <Node node={item} key={index}/>
      ))}
    </div>
  )

}

class Node extends React.Component {
  constructor(props) {
    super(props)
    this.hasChild = props.node.subOptions;
    this.state = {
      childrenVisible: false
    }

    this.handleClick= this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      childrenVisible: !this.state.childrenVisible
    })
  }

  render(){
    // if (this.state.childrenVisible === false) {
    //   return (
    //     <ul onClick={() => this.handleClick()}>
    //       {this.props.node.name}
    //     </ul>
    //   )
    // } else {
      return (
        <ul onClick={()=> this.handleClick()}>
         {this.props.node.name}
         {this.hasChild && <Tree toppings={this.props.node.subOptions}/>}
       </ul>
      )
    }
  }

export default Tree;
