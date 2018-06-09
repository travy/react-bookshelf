import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Alert from './Alert'
import Category from './Category'
import CollectionList from './CollectionList'
import LoadingIcon from './LoadingIcon'
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
        return ! this.state.book ? <LoadingIcon /> : (
            <div className='book-dashboard'>
                <header className='list-books-title book-info-header'>
                    <Link className='back-button' to='/'>Back</Link>
                    <h1>{this.state.book.title}</h1>
                </header>

                <div className='book-meta-wrapper'>
                    {this.isBookOnShelf() && <Alert message={this.getShelfMessage()} />}

                    <div className='book-meta-section book-meta-section-info'>
                        <div className='cover-art'>
                            <img className='book-cover box-shadow' src={this.state.book.imageLinks.thumbnail} alt="Book Artwork" />
                            <div className='preview-button'>
                                <a className='preview-button-link' href={this.state.book.previewLink} target='_blank'>Preview</a>
                            </div>
                        </div>

                        <div className='flow-top-down box-shadow section-padding'>
                            <h1 className='book-title'>{this.state.book.title}</h1>
                            <h2 className='book-subtitle'>{this.state.book.subtitle}</h2>
                            
                            <hr className='delimeter' />

                            <Category title='Language' value={this.state.book.language} />
                            <Category title='Maturity Rating' value={this.state.book.maturityRating} />
                            <Category title='Publishing Date' value={this.state.book.publishedDate} />
                            <Category title='Page Count' value={this.state.book.pageCount} />

                            <hr className='delimeter' />

                            <div className='flow-left-right'>
                                <CollectionList collection={this.state.book.authors} title='Authors' />
                                <CollectionList collection={this.state.book.categories} title='Categories' />
                            </div>
                        </div>
                    </div>

                    <div className='book-meta-section box-shadow section-padding'>
                        <h3>Description</h3>
                        <p className='book-description'>{this.state.book.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookDashboard
