import React, { Component } from 'react';
import { FilterableProductTable } from './FilterableProductTable';

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render(){
    return (
      <FilterableProductTable />
    )
  }
}
