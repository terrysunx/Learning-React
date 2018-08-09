import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(countries => countries.map(country => country.name))
            .then(countries => this.setState({ countries, loading: false }));
    }

    render() {
        return (
            <div>
                {
                    this.state.loading ?
                        <span>Loading country names....</span>
                        : !this.state.countries.length ?
                            <span>No country names</span>
                            : <ul>
                                {this.state.countries.map((country,index) => <li key={index}>{country}</li>)}
                            </ul>
                }
            </div>
        );
    }
}

export default App;