import React, { Component } from 'react'

class DivBook extends Component {

	render() {
		let book = this.props.book;
		let target = [];
		if (this.props.currBooks !== undefined) {
			target = this.props.currBooks.filter((curr_book) => {
				if (curr_book.id === book.id) {
					return true;
				} else {
					return false;
				}
			});
		} 

		// console.log(book);
		let book_shelf = target.length === 0 ? (book.shelf === undefined ? 'none' : book.shelf) : target[0].shelf;

		return book.imageLinks !== undefined && (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })` }}></div>
                <div className="book-shelf-changer">
                  <select value={ book_shelf } onChange={(event) => { this.props.changeShelf(book, event.target.value) }}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none" >None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ book.title }</div>
              <div className="book-authors">
              	{
              		(book.authors !== undefined && book.authors.length > 0) && (book.authors.map((author) => (
              			<div key={ author }>{ author }</div>
              		)))	
              	}
              </div>
            </div>
		);
	}
}

export default DivBook
