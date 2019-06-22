import React, { Component } from 'react'
import DivBook from './DivBook'

class DivBookShelf extends Component {

	render() {
		return (
			<div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.title }</h2>
              	<div className="bookshelf-books">
                    <ol className="books-grid">
                    	{
                    		this.props.books.map((book) => (
                    			<DivBook book={ book } />
                    		))
                  		}
                    </ol>
              	</div>
            </div>
		);
	}
}


export default DivBookShelf


