import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.handleChangeInSearchBox(
            this.refs.filterText.value, this.refs.inStockOnly.checked);
    }

    render() {
        return (
            <form>
                <input type="text"
                       value={this.props.filterText}
                       ref="filterText"
                       onChange={this.handleChange}
                       placeholder="Search..."/>
                <p>
                    <input type="checkbox"
                           value={this.props.inStockOnly}
                           ref="inStockOnly"
                           onChange={this.handleChange}/> Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;
