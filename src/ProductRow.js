import React, { Component } from 'react';

export class ProductRow extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render(){
    let color = this.props.stocked ? "green" : "red";
    let style = {
      color: color
    };

    return (
      <p>
        <span style={style}>{this.props.name}</span> - <span>{this.props.price}</span>
      </p>
    )
  }
}
