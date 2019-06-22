import React, { Component } from 'react'

class DivBook extends Component {


	render() {
		let book = this.props.book;
		return (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })` }}></div>
                <div className="book-shelf-changer">
                  <select value={ book.shelf } onChange={(event) => { this.props.changeShelf(book, event.target.value) }}>
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
              		book.authors.map((author) => (
              			<div key={ author }>{ author }</div>
              		))	
              	}
              </div>
            </div>
		);
	}
}

export default DivBook