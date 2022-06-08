import moment from 'moment'
import styled from '@emotion/styled'

const Table = styled.table`
    width: 100%;
    text-align: center;

    thead {
        text-align: center;
    }
`

export default function YearTable({ dateObj, setDate, showYearTableHandler }) {
    let months = []
    let nextTen = moment().set('year', dateObj).add(12, 'year').format('Y')

    const getDates = (startDate, stopDate) => {
        let dateArray = []
        let currentDate = moment(startDate)
        stopDate = moment(stopDate)
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format('YYYY'))
            currentDate = moment(currentDate).add(1, 'year')
        }
        return dateArray
    }

    const setYear = year => {
        setDate(moment(dateObj).set('year', year))
        showYearTableHandler(false)
    }

    let twelveYears = getDates(dateObj, nextTen)

    twelveYears.forEach((year, index) => {
        months.push(
            <td key={year + index} onClick={() => setYear(year)}>
                <span>{year}</span>
            </td>
        )
    })
    let rows = []
    let cells = []

    months.forEach((row, index) => {
        if (index % 3 !== 0 || index === 0) {
            cells.push(row)
        } else {
            rows.push(cells)
            cells = []
            cells.push(row)
        }
    })
    rows.push(cells)
    let yearList = rows.map((d, i) => <tr key={i}>{d}</tr>)

    return (
        <Table>
            <thead>
                <tr>
                    <th colSpan="4">Select a year</th>
                </tr>
            </thead>
            <tbody>{yearList}</tbody>
        </Table>
    )
}
