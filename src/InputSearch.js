import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DivBook from './DivBook'

class InputSearch extends Component {
	state = {
		query: '',
		books: []
	};

	filterResult(val) {
		this.setState({
			query: val
		});				
	}

	render() {
		let filtered_books = this.props.books.filter((book) => (
								book.title.toLowerCase().includes(this.state.query.toLowerCase())
							));

		let books = this.state.query === ''? [] : filtered_books;

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
	              		books.map((book) => (
	              			<DivBook key={ book.id } book={ book } changeShelf={ this.props.changeShelf } />
	              		))
	              	}
	              </ol>
	            </div>
	        </div>
		);
	}

}

export default InputSearch