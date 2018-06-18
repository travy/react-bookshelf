import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'

class Book extends Component {
    state = {
        shelf: this.props.book.shelf ? this.props.book.shelf : BooksAPI.bookShelves.none
    }

    /**
     * Call the onShelfSelection handler when a new shelf has been selected.
     */
    handleFormChange = (event) => {
        const shelf = event.target.value
        if (shelf !== this.state.shelf) {
            this.props.onShelfSelection(this.props.book, shelf)

            this.setState({
                shelf: shelf
            })
        }
    }

    render() {
        const coverArt = this.props.book.imageLinks
                ? this.props.book.imageLinks.thumbnail
                : require('../images/no-image-available.png')

        return (
            <div className="book">
                <div className="book-top">
                <img className="book-cover" src={coverArt} alt={this.props.book.title} />
                    <div className="book-shelf-changer">
                        <select onChange={this.handleFormChange} value={this.state.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <h1 className="book-cover-title">{this.props.book.title}</h1>
                <h2 className="book-authors">{this.props.book.authors && this.props.book.authors.length > 0 ? this.props.book.authors[0] : 'Unknown'}</h2>
                <Link className='book-view-button' to={'/book/' + this.props.book.id}>View</Link>
            </div>
        )
    }
}

Book.propTypes = {
    onShelfSelection: PropTypes.func.isRequired
}

export default Book
