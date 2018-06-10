import React from 'react'
import PropTypes from 'prop-types'

const Alert = (props) => (
    <div className='book-meta-section section-padding shelf-banner box-shadow'>
        <p className='message'>
            {props.message}
        </p>
    </div>
)

Alert.propTypes = {
    message: PropTypes.string.isRequired
}

export default Alert
