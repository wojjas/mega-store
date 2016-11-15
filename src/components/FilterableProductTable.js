import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {filterText: '', inStockOnly: false};
        this.handleChangeInSearchBox = this.handleChangeInSearchBox.bind(this);
    }

    handleChangeInSearchBox(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <h1>Mega Store</h1>
                <SearchBar filterText={this.state.filterText}
                           inStockOnly={this.state.inStockOnly}
                           handleChangeInSearchBox={this.handleChangeInSearchBox}/>
                <ProductTable products={this.props.products}
                              filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly}/>
            </div>
        );
    }
}

export default FilterableProductTable;
