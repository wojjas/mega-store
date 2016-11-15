import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        let lastCategory = null;
        let rows = [];
        this.props.products.forEach(function (product) {
            //exclude those not in stock
            if(inStockOnly && !product.stocked){
                return;
            }

            //use filter text
            if(product.name.indexOf(filterText) === -1){
                return;
            }

            if(lastCategory !== product.category){
                rows.push(<ProductCategoryRow category={product.category}/>);
                rows.push(<ProductRow product={product}/>);
            } else{
                rows.push(<ProductRow product={product}/>);
            }

            lastCategory = product.category;
        });

        const header = {background: 'lightgray'};

        return (
            <table>
                <thead>
                <tr style={header}>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ProductTable;
