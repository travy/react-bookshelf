import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

        //  update the search bar to track the users input, and trim any
        //  white space from the begining of the search terms
        const terms = event.target.value.replace(/^\s+/g, '')
        this.setState(prev => ({
            searchTerms: terms
        }))

        //  execute the search operation using the users input
        this.props.onSearch(terms)
    }

    render() {
        return (
            <form className="search-books" action="#" method="get">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
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
