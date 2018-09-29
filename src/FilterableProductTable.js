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

  handleStockFilterChange = (e)  => {
    this.setState({ stockFilter: e.currentTarget.checked });
  }

  render(){
    return (
      <div className="filterable-product-table">
        <span>
          <input type="text" onChange={this.handleTextFilterChange} />
          <br />
          <input type="checkbox" onChange={this.handleStockFilterChange} />
          <label>Only show products in stock</label>
        </span>
        <ProductTable textFilter={this.state.textFilter} stockFilter={this.state.stockFilter}/>
      </div>
    )
  }
}
