import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DivBook from './DivBook'
import * as BooksAPI from './BooksAPI'

class InputSearch extends Component {
	state = {
		query: '',
		books: [],
		search_books: []
	};
	
	filterResult(val) {
		// no number or empty string for query string
		if (!val.match('/^[0-9]+$/') && val.trim() !== '') {
			BooksAPI.search(val)
				.then((searched_results) => {
					this.setState({
						query: val,
						searched_books: searched_results
					});		
				});
		}			
	}

	render() {
		let searched_books = this.state.query === ''? [] : this.state.searched_books;

		return (
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link to="/" className="close-search" >Close</Link>
	              <div className="search-books-input-wrapper">
	                {/*
	                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                  You can find these search terms here:
	                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                  you don't find a specific author or title. Every search is limited by search terms.
	                */}
	                <input type="text" placeholder="Search by title or author" onChange={(event) => { this.filterResult(event.target.value) } }/>

	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{
	              		(searched_books.length > 0) && (searched_books.map((searched_book) => (
	              			<DivBook key={ searched_book.id } book={ searched_book } currBooks={ this.props.books } changeShelf={ this.props.changeShelf } />
	              		)))
	              	}
	              </ol>
	            </div>
	        </div>
		);
	}

}

export default InputSearch