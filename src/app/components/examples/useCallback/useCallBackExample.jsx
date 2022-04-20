import React, { useEffect, useState, useRef, useCallback } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'

const UseCallBackExample = () => {
    const [data, setData] = useState({})
    const withoutCallback = useRef(0)
    const withCallback = useRef(0)

    // data
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    useEffect(() => {
        validateWithoutCallback(data)
        validateWithCallback(data)
    }, [data])

    // without
    const validateWithoutCallback = (data) => {
        console.log('изменения "without" в input: ', data)
    }

    useEffect(() => {
        withoutCallback.current++
    }, [validateWithoutCallback])

    // with
    const validateWithCallback = useCallback((data) => {
        console.log('изменения "with" в input: ', data)
    }, [])

    useEffect(() => {
        withCallback.current++
        console.log(withCallback)
    }, [validateWithCallback])

    return (
        <CardWrapper>
            <p>Render without callback: {withoutCallback.current}</p>
            <p>Render with callback: {withCallback.current}</p>
            <SmallTitle>Example</SmallTitle>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ''}
                onChange={handleChange}
            />
        </CardWrapper>
    )
}

export default UseCallBackExample
