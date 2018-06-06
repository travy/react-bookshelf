import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        searchTerms: ''
    }

    handleTyping = (event) => {
        event.preventDefault()

        const terms = event.target.value

        this.setState(prev => ({
            searchTerms: terms
        }))
    }

    render() {
        return (
            <form className="search-books" action="#" method="get">
                <div className="search-books-bar">
                    <a className="close-search" href="/">Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                            onChange={this.handleTyping} value={this.state.searchTerms} />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar
