import React from 'react'

import PropTypes from 'prop-types'

const ButtonComponent = ({ name, clickFunc, classes = '' }) => {
    return <button className={`btn btn-primary ${classes}`} onClick={clickFunc}>{name || 'Button'}</button>
}

ButtonComponent.propTypes = {
    name: PropTypes.string,
    clickFunc: PropTypes.func,
    classes: PropTypes.string
}

export default ButtonComponent
