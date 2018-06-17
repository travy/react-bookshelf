import React from 'react'
import PropTypes from 'prop-types'

const CollectionList = (props) => {
    const list = props.collection
            ? props.collection.map(item => <li key={'collection-item-' + item}>{item}</li>)
            : <li>Unknown</li>

    return (
        <div className='collection-list'>
            <h3>{props.title}</h3>
            <ul>{list}</ul>
        </div>
    )
}

CollectionList.propTypes = {
    title: PropTypes.string.isRequired,
    collection: PropTypes.array
}

export default CollectionList
