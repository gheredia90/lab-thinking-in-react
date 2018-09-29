import React, { Component } from 'react';

export class ProductCategoryRow extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render(){
    return (
      <h4 >{this.props.name}</h4>
    )
  }
}
