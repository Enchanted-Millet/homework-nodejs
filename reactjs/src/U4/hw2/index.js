import React, { useState } from 'react'
import Buttons, { Button } from './components/Buttons'
import Display from './components/Display'
import Wrapper from './components/Wrapper'

const buttons = [
    [7, 8, 9, '±', 'C'],
    [4, 5, 6, '-', '×'],
    [1, 2, 3, '+', '÷'],
    [0, '00', '.', '=']
]

export default function Calculator() {
    const [input, setInput] = useState(0)
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState(0)

    const onClick = btn => e => {
        e.preventDefault()
        const value = e.target.innerHTML
        switch (btn) {
            case 'C':
                setInput(0)
                setResult(0)
                setOperator('')
                break
            case '±':
                setInput(input ? input * -1 : 0)
                setResult(result ? result * -1 : 0)
                setOperator('')
                break
            case '+':
            case '-':
            case '×':
            case '÷':
                setOperator(value)
                setResult(!result && input ? input : result)
                setInput(0)
                break
            case '=':
                if (operator && input) {
                    const math = (a, b, sign) =>
                        sign === '+'
                            ? a + b
                            : sign === '-'
                            ? a - b
                            : sign === '×'
                            ? a * b
                            : a / b
                    setResult(
                        input === '0' && operator === '÷'
                            ? 'Cant divide with zero'
                            : math(+result, +input, operator)
                    )
                    setOperator('')
                    setInput(0)
                }
                break
            case '.':
                setInput(input.toString().includes('.') ? input : input + value)
                break
            default:
                if (String(input).length < 16) {
                    if (input === 0 && value === '0') {
                        setInput('0')
                    } else if (input % 1 === 0) {
                        setInput(+(input + value))
                    } else {
                        setInput(input + value)
                    }
                }
                setResult(operator ? result : 0)
                break
        }
    }

    return (
        <Wrapper>
            <Display value={input ? input : result} />
            <Buttons>
                {buttons.flat().map((btn, i) => {
                    return (
                        <Button
                            key={i}
                            value={btn}
                            className={btn === '=' ? 'equals' : ''}
                            onClick={onClick(btn)}
                        />
                    )
                })}
            </Buttons>
        </Wrapper>
    )
}
