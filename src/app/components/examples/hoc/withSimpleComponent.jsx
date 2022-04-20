import React from 'react'
import CardWrapper from '../../common/Card'

const withSimpleComponent = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} />
        </CardWrapper>
    )
}

export default withSimpleComponent
