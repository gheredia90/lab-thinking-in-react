import React, { Component } from 'react';
import { ProductTable } from './ProductTable';

export class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleTextFilterChange = (e)  => {
    this.setState({ textFilter: e.currentTarget.value });
  }

  render(){
    return (
      <div className="filterable-product-table">
        <span>
          <input type="text" onChange={this.handleTextFilterChange} />
          <br />
          <input type="checkbox" value="Submit" />
          <label>Only show products in stock</label>
        </span>
        <ProductTable textFilter={this.state.textFilter}/>
      </div>
    )
  }
}
