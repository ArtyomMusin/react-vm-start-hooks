import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log('render button')
    })

    return <button className='btn btn-primary' onClick={onLogOut}>LogOut</button>
}

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
}

const areEqual = (prevState, nextState) => prevState.onLogOut === nextState.onLogOut

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual)

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false)

    const handleLogOut = useCallback(() => {
        localStorage.removeItem('auth')
        console.log('logout')
    }, [props])

    return (
        <>
            <button className='btn btn-primary' onClick={() => setState(!state)}>Initiate rerender</button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    )
}

export default MemoWithUseCallbackExample
