import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './icons/search-icon.svg'

class BookCollectionDashboard extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            var newState = {
                currentlyReading: [],
                wantToRead: [],
                read: []
            }

            books.forEach(book => {
                switch (book.shelf) {
                    case 'currentlyReading':
                        newState.currentlyReading.push(book)
                        break;
                    case 'wantToRead':
                        newState.wantToRead.push(book)
                        break;
                    case 'read':
                        newState.read.push(book)
                        break;
                    default:
                        console.log('Should not have occurred')
                        break;
                }
            }) 

            this.setState(prev => newState)
        })
    }

    render() {
        return (
            <div className='list-books'>
                <div className='list-books-title'>
                    <h1>My Book Collection</h1>
                </div>
                
                <div className='list-books-content'>
                    <BookShelf title='Currently Reading' books={this.state.currentlyReading} />
                    <BookShelf title='Want to Read' books={this.state.wantToRead} />
                    <BookShelf title='Read' books={this.state.read} />
                </div>

                <Link className='open-search' to='/search'>Search</Link>
            </div>
        )
    }
}

export default BookCollectionDashboard
