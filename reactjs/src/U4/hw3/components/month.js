import moment from 'moment';

export default function MonthTable({
    allMonths,
    date,
    setDate,
    showMonthTableHandler
}) {
    const setMonth = month => {
        let monthNo = allMonths.indexOf(month);
        setDate(moment(date).set('month', monthNo));
        showMonthTableHandler();
    };

    let months = [];
    allMonths.forEach((month, index) => {
        months.push(
            <td key={month + index} onClick={() => setMonth(month)}>
                <span>{month}</span>
            </td>
        );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, index) => {
        if (index % 3 === 0) {
            rows.push(cells);
            cells = [];
            cells.push(row);
        } else {
            cells.push(row);
        }
    });
    rows.push(cells);

    let monthList = rows.map((d, i) => <tr key={i}>{d}</tr>);

    return (
        <table className="month-picker-table">
            <thead>
                <tr>
                    <th>Select a month</th>
                </tr>
            </thead>
            <tbody>{monthList}</tbody>
        </table>
    );
}
