import React from 'react'
import Book from './Book'

const BookGrid = (props) => (
    <ul className="book-library books-grid">
    {
        props.books.map(book => (
            <li key={"book-item-" + book.id}>
                <Book book={book} {...props} />
            </li>
        ))
    }
    </ul>
)

export default BookGrid
