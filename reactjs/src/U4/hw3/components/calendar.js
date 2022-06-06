import { useState, useMemo } from 'react';
import moment from 'moment';
import MonthTable from './month';
import './style.css';

export default function Calendar() {
    const [date, setDate] = useState(moment());
    const [allMonths, setAllMonths] = useState(moment.months());
    const [showMonthTable, setShowMonthTable] = useState(false);

    const firstDayOfMonth = useMemo(
        () => moment(date).startOf('month').format('d'),
        [date]
    );

    const blanks = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        blanks.push(<td key={'blank' + i}>&nbsp;</td>);
    }

    const getCurrentDay = () => date.format('D');

    let daysInMonth = [];
    for (let d = 1; d <= moment(date).daysInMonth(); d++) {
        let currentDay = d === +getCurrentDay() ? 'today' : '';
        daysInMonth.push(
            <td key={'days' + d} className={`calendar-day ${currentDay}`}>
                {d}
            </td>
        );
    }

    const rows = [];
    let cells = [];
    const totalCells = blanks.length + daysInMonth.length;
    [...blanks, ...daysInMonth].forEach((row, index) => {
        if (index % 7 === 0) {
            rows.push(cells);
            cells = [];
            cells.push(row);
        } else {
            cells.push(row);
        }
        if (index === totalCells - 1) {
            rows.push(cells);
        }
    });

    daysInMonth = rows.map((d, i) => <tr key={i}>{d}</tr>);

    const weekdaysShortName = moment.weekdaysShort().map(day => {
        return (
            <th key={day} scope="col">
                {day}
            </th>
        );
    });

    const showMonthTableHandler = () => {
        setShowMonthTable(!showMonthTable);
    };

    return (
        <div>
            <div className="calendar-header" onClick={showMonthTableHandler}>
                {date.format('MMMM')}
            </div>
            {showMonthTable ? (
                <MonthTable
                    allMonths={allMonths}
                    date={date}
                    setDate={setDate}
                    showMonthTableHandler={showMonthTableHandler}
                />
            ) : (
                <table
                    className="table"
                    style={{ width: 'auto', margin: 'auto' }}
                >
                    <thead>
                        <tr>{weekdaysShortName}</tr>
                    </thead>
                    <tbody>{daysInMonth}</tbody>
                </table>
            )}
        </div>
    );
}
