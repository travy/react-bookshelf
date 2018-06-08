import React, { Component } from 'react'
import BookShelf from './BookShelf.js'
import SearchBar from './SearchBar.js'
import * as BooksAPI from './BooksAPI.js'

class BookSearchDashboard extends Component {
    state = {
        books: []
    }

    handleSearch = (terms) => {
        //  don't perform AJAX if terms is empty or undefined
        if (! terms) {
            this.clearBooks()
            return
        }

        BooksAPI.search(terms, 5).then((books) => {
            if (books.error) {
                this.clearBooks()
            } else {
                this.insertBooks(books)
            }
        })
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
                    <BookShelf books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default BookSearchDashboard
