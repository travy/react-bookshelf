import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoadingIcon from './LoadingIcon'
import BookMetaInfo from './BookMetaInfo'
import * as BooksAPI from '../BooksAPI'

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

                <div className='book-dashboard-content'>
                    {mainContent}
                </div>
            </div>
        )
    }
}

export default BookDashboard
