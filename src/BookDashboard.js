import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookDashboard extends Component {
    state = {
        book: null
    }

    componentDidMount() {
        const bookId = this.props.match.params.book_id
        BooksAPI.get(bookId).then(book => {
            console.log(book)

            this.setState({
                book: book
            })
        })
    }

    render() {
        return (
            <div className='book-dashboard'>
                {this.state.book ? this.state.book.title : 'loading'}
            </div>
        )
    }
}

export default BookDashboard
