import React, { Component } from 'react'
import DivBookShelf from './DivBookShelf'
import { Link } from 'react-router-dom'

class DivBookShelves extends Component {

	render() {
		let current_reading = [];
		let want_to_read = [];
		let read = [];

		this.props.books.forEach((book) => {
			if (book.shelf === 'currentlyReading') {
				current_reading.push(book);
			} else if (book.shelf === 'wantToRead') {
				want_to_read.push(book);
			} else if (book.shelf === 'read') {
				read.push(book);
			}
		});

		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	                <DivBookShelf title='Currently Reading' books={ current_reading } changeShelf={ this.props.changeShelf } />
	                <DivBookShelf title='Want to Read' books={ want_to_read } changeShelf={ this.props.changeShelf } />
	                <DivBookShelf title='Read' books={ read } changeShelf={ this.props.changeShelf } />
	              </div>
	            </div>
	            <div className="open-search">
	            	<Link to="/search">Add a book</Link>
	            </div>
          	</div>
		);
	}

}

export default DivBookShelves



