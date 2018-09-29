import React, { Component } from 'react';
import data from './../data.json'
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';



export class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render(){
    function filterProducts(name) {
      return function filter(product) {
        let matches = product.name.match(new RegExp(name, "i"));
        return matches !== null
      };
    }

    let products = data.data;
    let filteredProducts = products.filter(filterProducts(this.props.textFilter));

    return (
      <div>
        <ProductCategoryRow name="Sporting Goods" />
        {
          filteredProducts.filter(e => e.category == "Sporting Goods")
            .map((e, i )=> (
              <ProductRow key={i + name} name={e.name} price={e.price} stocked={e.stocked} />
            ))
        }
        <ProductCategoryRow name="Electronics" />
        {
          filteredProducts.filter(e => e.category == "Electronics")
            .map((e, i) => (
              <ProductRow key={i + name} name={e.name} price={e.price} stocked={e.stocked} />
            ))
        }
      </div>
    )
  }
}
