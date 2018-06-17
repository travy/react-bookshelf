import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoadingIcon from './LoadingIcon'
import BookMetaInfo from './BookMetaInfo'
import * as BooksAPI from './BooksAPI'

class BookDashboard extends Component {
    state = {
        book: null
    }

    componentDidMount() {
        const bookId = this.props.match.params.book_id

        BooksAPI.get(bookId).then(book => {
            this.setState({
                book: book
            })
        })
    }

    /**
     * Determines the message to display if a book is on a specific
     * shelf
     *
     */
    getShelfMessage() {
        const shelf = this.state.book.shelf
        const bookShelves = BooksAPI.bookShelves

        switch (shelf) {
            case bookShelves.currentlyReading:
                return 'You are currently reading this title'
            case bookShelves.wantToRead:
                return 'This book is in your reading list'
            case bookShelves.read:
                return 'You have already read this book'
            default:
                return null;
        }
    }

    /**
     * Determines if the book item has been added to a bookshelf.
     *
     */
    isBookOnShelf() {
        return this.state.book.shelf
                && this.state.book.shelf !== BooksAPI.bookShelves.none
    }

    render() {
        const title = this.state.book ? this.state.book.title : 'Loading ...'
        const mainContent = ! this.state.book
                ? <LoadingIcon />
                : <BookMetaInfo book={this.state.book} />

        return (
            <div className='book-dashboard'>
                <header className='list-books-title book-info-header'>
                    <Link className='back-button' to='/'>Back</Link>
                    <h1>{title}</h1>
                </header>

                {mainContent}
            </div>
        )
    }
}

export default BookDashboard
