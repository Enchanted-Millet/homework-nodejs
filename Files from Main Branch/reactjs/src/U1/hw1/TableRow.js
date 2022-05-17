import TableData from './TableData';
import './style.css';

function TableRow(props) {
    return (
        <div className="table-row">
            {props.row.map((cell, idx) => (
                <TableData key={idx} data={cell} />
            ))}
        </div>
    );
}

export default TableRow;
