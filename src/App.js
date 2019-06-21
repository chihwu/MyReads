import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import InputSearch from './InputSearch'
import DivBookShelves from './DivBookShelves'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

class BooksApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      });

      console.log(this.state.books);
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <DivBookShelves books={ this.state.books } />
        )} />

        <Route path="/search" render={() => (
          <InputSearch />
        )} />
      </div>
    )
  }
}

export default BooksApp
