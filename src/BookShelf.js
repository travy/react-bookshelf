import React from 'react'
import Book from './Book'

const BookShelf = (props) => (
    <ul className="book-library books-grid">
    {
        props.books.map(book => (
            <li key={"book-item-" + book.id}>
                <Book book={book} />
            </li>
        ))
    }
    </ul>
)

export default BookShelf
