import moment from 'moment'
import styled from '@emotion/styled'

const Table = styled.table`
    width: 100%;
    text-align: center;

    thead {
        text-align: center;
    }
`
export default function MonthTable({
    allMonths,
    date,
    setDate,
    showMonthTableHandler
}) {
    const setMonth = month => {
        let monthNo = allMonths.indexOf(month)
        setDate(moment(date).set('month', monthNo))
        showMonthTableHandler()
    }

    let months = []
    allMonths.forEach((month, index) => {
        months.push(
            <td key={month + index} onClick={() => setMonth(month)}>
                <span>{month}</span>
            </td>
        )
    })

    let rows = []
    let cells = []

    months.forEach((row, index) => {
        if (index % 3 === 0) {
            rows.push(cells)
            cells = []
            cells.push(row)
        } else {
            cells.push(row)
        }
    })
    rows.push(cells)

    let monthList = rows.map((d, i) => <tr key={i}>{d}</tr>)

    return (
        <Table>
            <thead>
                <tr>
                    <th colSpan="4">Select a month</th>
                </tr>
            </thead>
            <tbody>{monthList}</tbody>
        </Table>
    )
}
