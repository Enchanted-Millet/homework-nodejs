import React, { Fragment } from 'react';

import useCalendar from '../hooks/useCalendar';

const Calendar = (props) => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth
  , getPrevYear, getNextYear} = useCalendar();


  const dateClickHandler = date => {
    console.log(date + 'calendar');
    props.onReceiveinfo(date);

  }

  return(
    <Fragment>
      <p>Selected Month: {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
      <table className="table">
        <thead>
          <tr>
            {daysShort.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            Object.values(calendarRows).map(cols => {
              return <tr key={cols[0].date}>
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                      {col.value}
                    </td>
                    : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                ))}
              </tr>
            })
          }
        </tbody>
      </table>

        <button className="button" onClick={getPrevMonth}>Prev Month</button>
        <button className="button" onClick={getNextMonth}>Next Month</button>
        <button className="button" onClick={getPrevYear}>Prev Year</button>
        <button className="button" onClick={getNextYear}>Next Year</button>
    </Fragment>
  );
}

export default Calendar;