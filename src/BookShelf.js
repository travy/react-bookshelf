import React from 'react'
import BookGrid from './BookGrid'

const BookShelf = props => (
    <div className='bookshelf'>
        <h2 className='bookshelf-title'>{props.title}</h2>
        <div className='bookshelf-books'>
            <BookGrid books={props.books} {...props} />
        </div>
    </div>
)

export default BookShelf
