import React, { Component } from 'react'
import BookGrid from './BookGrid'
import SearchBar from './SearchBar'
import * as BooksAPI from './BooksAPI'

class BookSearchDashboard extends Component {
    state = {
        books: []
    }

    /**
     * Perform a search using the API.
     *
     */
    handleSearch = (terms) => {
        //  don't perform AJAX if terms is empty or undefined
        if (! terms) {
            this.clearBooks()
            return
        }

        BooksAPI.search(terms, 25).then((books) => {
            if (books.error) {
                this.clearBooks()
            } else {
                this.insertBooks(books)
            }
        })
    }

    /**
     * Update the bookshelf that a given book is on.
     *
     */
    handleShelfSelection = (book, shelf) => {
        BooksAPI.update(book, shelf)
    }

    clearBooks() {
        this.insertBooks([])
    }

    insertBooks(books) {
        this.setState(prev => ({
            books: books
        }))
    }

    render () {
        return (
            <div className="search-dashboard">
                <SearchBar onSearch={this.handleSearch} />
                <div className="search-books-results">
                    <BookGrid books={this.state.books} onShelfSelection={this.handleShelfSelection} />
                </div>
            </div>
        )
    }
}

export default BookSearchDashboard
