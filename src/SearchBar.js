import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {
    static propTypes() {
        return {
            onSearch: PropTypes.func.isRequired
        }
    }

    state = {
        searchTerms: ''
    }

    /**
     * Updates the state of the component as the user types.
     *
     */
    handleTyping = (event) => {
        event.preventDefault()

        const terms = event.target.value.trim()
        this.setState(prev => ({
            searchTerms: terms
        }))

        this.props.onSearch(terms)
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
