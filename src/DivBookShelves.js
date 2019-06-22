import React, { Component } from 'react'
import DivBookShelf from './DivBookShelf'
import { Link } from 'react-router-dom'

class DivBookShelves extends Component {

	constructor(props) {
		super(props);
		this.state = {
			current_reading: [],
			want_to_read: [],
			read: []
		};
	}

	componentDidMount() {
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

		this.setState({
			current_reading: current_reading,
			want_to_read: want_to_read,
			read: read
		});
	}

	render() {

		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	                <DivBookShelf title='Currently Reading' books={ this.state.current_reading } />
	                <DivBookShelf title='Want to Read' books={ this.state.want_to_read } />
	                <DivBookShelf title='Read' books={ this.state.read } />
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



