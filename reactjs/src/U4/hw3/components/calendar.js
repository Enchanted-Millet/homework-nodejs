import { useState, useMemo } from 'react'
import moment from 'moment'
import MonthTable from './month'
import './style.css'
import styled from '@emotion/styled'
import YearTable from './year'

const Container = styled.div`
    width: 400px;
    margin: 0 auto;
`

const Table = styled.table`
    width: 100%;
`

const Icon = styled.i`
    cursor: pointer;
    line-height: inherit;
`

export default function Calendar() {
    const [date, setDate] = useState(moment())
    const [showMonthTable, setShowMonthTable] = useState(false)
    const [showYearTable, setShowYearTable] = useState(false)

    const firstDayOfMonth = useMemo(
        () => moment(date).startOf('month').format('d'),
        [date]
    )

    const blanks = []
    for (let i = 0; i < firstDayOfMonth; i++) {
        blanks.push(<td key={'blank' + i}>&nbsp;</td>)
    }

    const getCurrentDay = () => date.format('D')

    let daysInMonth = []
    for (let d = 1; d <= moment(date).daysInMonth(); d++) {
        let currentDay = d === +getCurrentDay() ? 'today' : ''
        daysInMonth.push(
            <td key={'days' + d} className={`calendar-day ${currentDay}`}>
                {d}
            </td>
        )
    }

    const rows = []
    let cells = []
    const totalCells = blanks.length + daysInMonth.length
    ;[...blanks, ...daysInMonth].forEach((row, index) => {
        if (index % 7 === 0) {
            rows.push(cells)
            cells = []
            cells.push(row)
        } else {
            cells.push(row)
        }
        if (index === totalCells - 1) {
            rows.push(cells)
        }
    })

    daysInMonth = rows.map((d, i) => <tr key={i}>{d}</tr>)

    const weekdaysShortName = moment.weekdaysShort().map(day => {
        return (
            <th key={day} scope="col">
                {day}
            </th>
        )
    })

    const showMonthTableHandler = () => {
        setShowMonthTable(!showMonthTable)
        setShowYearTable(false)
    }

    const showYearTableHandler = () => {
        setShowYearTable(!showYearTable)
        setShowMonthTable(false)
    }

    const onPrev = () => {
        if (showYearTable) {
            setDate(moment(date).subtract(1, 'year'))
        } else {
            setDate(moment(date).subtract(1, 'month'))
        }
    }
    const onNext = () => {
        if (showYearTable) {
            setDate(moment(date).add(1, 'year'))
        } else {
            setDate(moment(date).add(1, 'month'))
        }
    }

    return (
        <Container>
            <div className="calendar-header">
                <Icon className="fa-solid fa-angle-left" onClick={onPrev} />
                <span
                    onClick={showMonthTableHandler}
                    style={{ cursor: 'default' }}
                >
                    {date.format('MMMM')}
                </span>
                <span
                    onClick={showYearTableHandler}
                    style={{ cursor: 'default' }}
                >
                    {date.format('YYYY')}
                </span>
                <Icon className="fa-solid fa-angle-right" onClick={onNext} />
            </div>
            {showYearTable && (
                <YearTable
                    dateObj={date.format('Y')}
                    setDate={setDate}
                    showYearTableHandler={showYearTableHandler}
                />
            )}
            {showMonthTable && (
                <MonthTable
                    allMonths={moment.months()}
                    date={date}
                    setDate={setDate}
                    showMonthTableHandler={showMonthTableHandler}
                />
            )}
            {!showMonthTable && !showYearTable && (
                <Table className="table">
                    <thead>
                        <tr>{weekdaysShortName}</tr>
                    </thead>
                    <tbody>{daysInMonth}</tbody>
                </Table>
            )}
        </Container>
    )
}
