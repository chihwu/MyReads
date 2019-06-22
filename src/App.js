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

  changeShelf(target_book, shelf) {
    BooksAPI.update(target_book, shelf)
            .then((res) => {

              this.setState(this.state.books.map((book) => {
                    if (book.id === target_book.id) {
                      book.shelf = shelf 
                    } 

                    return book;
                    
                  }));
            });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={({ history }) => (
          <DivBookShelves books={ this.state.books } changeShelf={(book, shelf) => { 
                                                                            this.changeShelf(book, shelf); 
                                                                          }} />
        )} />

        <Route path="/search" render={({ history }) => (
          <InputSearch books={ this.state.books } changeShelf={(book, shelf) => { 
                                                                            this.changeShelf(book, shelf); 
                                                                          }} />
        )} />
      </div>
    )
  }
}

export default BooksApp
