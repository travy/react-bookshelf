import React from 'react'
import { Link } from 'react-router-dom'

const Book = (props) => (
    <div className="book">
        <div className="book-top">
            <img className="book-cover" src={props.book.imageLinks.thumbnail} alt={props.book.title} />
            <div className="book-shelf-changer">
                <select defaultValue={props.book.shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <h1 className="book-cover-title">{props.book.title}</h1>
        <h2 className="book-authors">{props.book.authors && props.book.authors.length > 0 ? props.book.authors[0] : 'Unknown'}</h2>
        <Link className='book-view-button' to={'/book/' + props.book.id}>View</Link>
    </div>
)

export default Book
