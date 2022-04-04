import TableRow from './TableRow';

function Table(props) {
    return (
        <div>
            {props.data.map((row, idx) => (
                <TableRow key={idx} row={row} />
            ))}
        </div>
    );
}

export default Table;
