import React from 'react';
import { useSelector } from 'react-redux';

const Table = () => {
    const state = useSelector(state => state.hw5);
    const { combined } = state || { combined: [{}] };

    const tableHead = Object.keys(combined[0]);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {tableHead.map((th, idx) => (
                        <th key={idx} scope="col">
                            {th}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {combined.map(({ id, firstName, lastName }) => (
                    <tr key={id}>
                        <th scope="row">{id}</th>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
