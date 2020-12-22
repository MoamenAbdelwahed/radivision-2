import React, { Component } from 'react';
import './App.css';
import Table from './Table.js'

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(json => json)
      .then(movies => this.setState({ 'movies': movies }));
  }
  render() {
    return (
      <div className="App">
        <Table movies={ this.state.movies }/>
      </div>
    );
  }
}

export default App;
