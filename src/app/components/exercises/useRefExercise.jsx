import React, { useRef } from 'react'
import CollapseWrapper from '../common/collapse'
import Divider from '../common/divider'
const UseRefExercise = () => {
    const smallRef = useRef()

    const changeSmall = () => {
        smallRef.current.children[0].textContent = 'text'
        smallRef.current.style.width = '150px'
        smallRef.current.style.height = '80px'
    }

    return (
        <CollapseWrapper title="Упражнение">
            <Divider />
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: 'white'
                }}
                ref={smallRef}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-secondary my-4" onClick={changeSmall}>
                Изменить блок
            </button>
        </CollapseWrapper>
    )
}

export default UseRefExercise
