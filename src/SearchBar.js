import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor() {
    super();
    this.setState = {};
  }

  render(){
    return (
      <span>
        <input type="text" />
        <br />
        <input type="checkbox" value="Submit" />
        <label>Only show products in stock</label>
      </span>
    )
  }
}
