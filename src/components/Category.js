import React from 'react'
import PropTypes from 'prop-types'

const Category = (props) => (
    <div className='category'>
        <h1 className='category-title'>{props.title}</h1>
        <p className='category-value'>{props.value}</p>
    </div>
)

Category.propTypes = {
    title: PropTypes.string.isRequired
}

export default Category
