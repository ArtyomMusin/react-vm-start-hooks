import React from 'react'

import PropTypes from 'prop-types'

const ButtonComponent = ({ name, clickFunc }) => {
    return <button className='btn btn-primary' onClick={clickFunc}>{name || 'Button'}</button>
}

ButtonComponent.propTypes = {
    name: PropTypes.string,
    clickFunc: PropTypes.func
}

export default ButtonComponent
