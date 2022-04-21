import React from 'react'
import CardWrapper from '../../common/Card'
import PropTypes from 'prop-types'

const withSimpleComponent = (Component) => {
    const Wrapper = ({ isAuth, onLogin, onLogOut }) => {
        return (
            <CardWrapper>
                {isAuth
                    ? <Component name='Выйти из системы' clickFunc={onLogOut} />
                    : <Component name='Войти' clickFunc={onLogin} />
                }
            </CardWrapper>
        )
    }

    Wrapper.propTypes = {
        isAuth: PropTypes.bool,
        onLogin: PropTypes.func,
        onLogOut: PropTypes.func
    }

    return Wrapper
}

export default withSimpleComponent
