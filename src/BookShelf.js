import React from 'react'
import BookGrid from './BookGrid'
import Alert from './Alert'

const BookShelf = props => {
    const shelfContents = props.books.length > 0
            ? <BookGrid books={props.books} {...props} />
            : <Alert message='There are no books on the shelf' />

    return (
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>{props.title}</h2>
            <div className='bookshelf-books'>
                {shelfContents}
            </div>
        </div>
    )
}

export default BookShelf
