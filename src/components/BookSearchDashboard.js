import React, { Component } from 'react'
import BookGrid from './BookGrid'
import NoSearchResults from './NoSearchResults'
import SearchBar from './SearchBar'
import * as BooksAPI from '../BooksAPI'

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

    /**
     * Clears out all search results.
     *
     */
    clearBooks() {
        this.insertBooks([])
    }

    /**
     * Inserts a collection of books into the display of books.  Each book entry
     * will show the shelf that it resides on when the options button is pressed.
     *
     * @param {Array} books 
     */
    insertBooks(books) {
        BooksAPI.getAll().then(booksOnShelves => {
            //  construct an array with all the ids for books on a shelf, preserving the order
            const shelfIds = booksOnShelves.map(book => {
                return book.id
            })

            //  iterate through all the search results, updating the shelf category when needed
            books.forEach(book => {
                const idOfBookOnShelf = shelfIds.indexOf(book.id)
                if (idOfBookOnShelf >= 0) {
                    book.shelf = booksOnShelves[idOfBookOnShelf].shelf
                }
            });
            
            //  update the state with the necessary books
            this.setState(prev => ({
                books: books
            }))
        })
    }

    render () {
        const mainContent = this.state.books.length > 0
                ? <BookGrid books={this.state.books} onShelfSelection={this.handleShelfSelection} />
                : <NoSearchResults />

        return (
            <div className="search-dashboard">
                <SearchBar onSearch={this.handleSearch} />
                <div className="search-books-results">
                    {mainContent}
                </div>
            </div>
        )
    }
}

export default BookSearchDashboard
