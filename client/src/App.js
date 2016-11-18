import React, { Component } from 'react';
//import logo from './logo.svg'; <img src={logo} className="App-logo" alt="logo" />
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

const PRODUCTS = [
  {id: Symbol().toString(), category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {id: Symbol().toString(), category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {id: Symbol().toString(), category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {id: Symbol().toString(), category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {id: Symbol().toString(), category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {id: Symbol().toString(), category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


class App extends Component {
  componentWillMout(){
    //TODO: Fetch the components from API here
    //var url = "http://www.omdbapi.com" //has CORS enabled
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={PRODUCTS}/>
      </div>
    );
  }
}

export default App;
