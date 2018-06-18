import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import Alert from './Alert'
import Category from './Category'
import CollectionList from './CollectionList'

class BookMetaInfo extends Component {
    /**
     * Determines if the book item has been added to a bookshelf.
     *
     */
    isBookOnShelf() {
        return this.props.book.shelf
                && this.props.book.shelf !== BooksAPI.bookShelves.none
    }

    /**
     * Determines the message to display if a book is on a specific
     * shelf
     *
     */
    getShelfMessage() {
        const shelf = this.props.book.shelf
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

    render() {
        return (
            <div className='book-meta-wrapper'>
                {this.isBookOnShelf() && <Alert message={this.getShelfMessage()} />}

                <div className='book-meta-section book-meta-section-info'>
                    <div className='cover-art'>
                        <img className='book-cover box-shadow' src={this.props.book.imageLinks.thumbnail} alt="Book Artwork" />
                        <div className='preview-button'>
                            <a className='preview-button-link' href={this.props.book.previewLink} target='_blank'>Preview</a>
                        </div>
                    </div>

                    <div className='flow-top-down box-shadow section-padding book-meta'>
                        <h1 className='book-title'>{this.props.book.title}</h1>
                        <h2 className='book-subtitle'>{this.props.book.subtitle}</h2>
                        
                        <hr className='delimeter' />

                        <Category title='Language' value={this.props.book.language} />
                        <Category title='Maturity Rating' value={this.props.book.maturityRating} />
                        <Category title='Publishing Date' value={this.props.book.publishedDate} />
                        <Category title='Page Count' value={this.props.book.pageCount} />

                        <hr className='delimeter' />

                        <div className='flow-left-right'>
                            <CollectionList collection={this.props.book.authors} title='Authors' />
                            <CollectionList collection={this.props.book.categories} title='Categories' />
                        </div>
                    </div>
                </div>

                <div className='book-meta-section box-shadow section-padding'>
                    <h3>Description</h3>
                    <p className='book-description'>{this.props.book.description}</p>
                </div>
            </div>
        )
    }
}

export default BookMetaInfo
