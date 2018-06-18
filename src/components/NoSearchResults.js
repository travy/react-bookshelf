import React from 'react'

const NoSearchResults = (props) => (
    <div className='no-search-wrapper'>
        <img alt='No Search Results Found' className='no-search-image' src={require('../images/no-results.png')} />
        <h1 className='no-search-message'>No search results were found.  Please try searching for another title or author.</h1>
    </div>
)

export default NoSearchResults
