import React, {Component} from 'react';
//import logo from './logo.svg'; <img src={logo} className="App-logo" alt="logo" />
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

// NB! the port, this works because of
// "proxy": "http://localhost:3001/" in package.json
// webpack does the trick, proxies into where api-server runs.
const API_URL = 'http://localhost:3000';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {articles: []};
    }

    componentDidMount() {
        fetch(API_URL + '/api/data')
            .then(function (res) {
                return res ? res.json() : null;
            })
            .then(dataFromServer => {
                this.setState({articles: dataFromServer});
            })
            .catch(error => {
                console.log('Exception: ', error);
        });
    }

    render() {
        return (
            <div className="App">
                <FilterableProductTable products={this.state.articles}/>
            </div>
        );
    }
}

export default App;
