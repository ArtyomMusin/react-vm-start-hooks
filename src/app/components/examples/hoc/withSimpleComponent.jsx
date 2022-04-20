import React from 'react'
import CardWrapper from '../../common/Card'
import PropTypes from 'prop-types'

const withSimpleComponent = (Component) => ({ isAuth, onLogin, onLogOut }) => {
    return (
        <CardWrapper>
            <button className='btn btn-primary' onClick={isAuth ? onLogin : onLogOut}>
                {isAuth ? 'Войти' : 'Выйти из системы'}
            </button>
        </CardWrapper>
    )
}

withSimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
}

export default withSimpleComponent
