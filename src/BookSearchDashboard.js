import React, { Component } from 'react'
import BookShelf from './BookShelf.js'
import SearchBar from './SearchBar.js'
import { getAll } from './BooksAPI.js'

class BookSearchDashboard extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        getAll().then(books => {
            this.setState(prev => ({
                books: prev.books.concat(books)
            }))
        })
    }

    render () {
        return (
            <div className="search-dashboard">
                <SearchBar />
                <div className="search-books-results">
                    <BookShelf books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default BookSearchDashboard
