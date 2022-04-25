import React, { useState } from 'react'
import CollapseWrapper from '../common/collapse'
import ButtonComponent from '../examples/hoc/buttonComponent'
import Divider from '../common/divider'

import withSimpleComponent from './hocElements/withSimpleComponent'

const HocExercise = () => {
    const SimpleComponent = withSimpleComponent(ButtonComponent)

    const [auth, setAuth] = useState(localStorage.getItem('auth'))
    const authStatus = Boolean(auth)

    const handleLogin = () => {
        authStatus ? localStorage.removeItem('auth') : localStorage.setItem('auth', 'token')
        setAuth(localStorage.getItem('auth'))
    }

    const onLogin = () => {
        console.log('login')
        handleLogin()
    }

    const onLogOut = () => {
        console.log('logout')
        handleLogin()
    }

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                Вам необходимо реализовать компонент{' '}
                <code>SimpleComponent</code>, который:
            </p>
            <ul>
                <li>
                    Имеет параметры:<code>onLogin</code>, <code>onLogOut</code>,{' '}
                    <code>isAuth</code>
                </li>
                <li>
                    Отображайте кнопку <code>Войти</code>, если пользователь НЕ
                    авторизован.
                </li>
                <li>
                    Отображает кнопку с содержанием{' '}
                    <code>Выйти из системы</code>, если пользователь
                    авторизован.
                </li>
                <li>
                    При нажатии на кнопки вызываются методы <code>onLogin</code>{' '}
                    и <code>onLogOut</code>
                </li>
            </ul>
            <p className="mt-3">
                Вам необходимо <code>HOC</code>, который модифицирует компонент{' '}
                <code>SimpleComponent</code> следующим образом:
            </p>
            <ul>
                <li>
                    Добавляет обертку в виде карточки boostrap (использовать
                    существующий HOC)
                </li>
                <li>
                    Передает параметр <code>isAuth</code>, который является
                    результатом проверки наличия записи с названием{' '}
                    <code>user</code> в <code>localStorage</code>
                </li>
                <li>
                    Передает параметр <code>onLogin</code> и{' '}
                    <code>onLogOut</code> для управления записью с названием{' '}
                    <code>user</code> в <code>localStorage</code>
                </li>
            </ul>
            <Divider />
            <SimpleComponent isAuth={authStatus} onLogin={onLogin} onLogOut={onLogOut} />
        </CollapseWrapper>
    )
}

export default HocExercise
