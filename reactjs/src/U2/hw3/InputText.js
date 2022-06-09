import React from 'react';
import styled from '@emotion/styled';

const ErrorMessage = styled.div`
    color: crimson;
`;

export default function InputText({
    id,
    title,
    type = 'text',
    errors = [],
    ...props
}) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {title}
            </label>
            <input type={type} className="form-control" id={id} {...props} />
            {errors.length > 0 &&
                errors.map(error => {
                    return (
                        <ErrorMessage key={error.name}>
                            {error.message}
                        </ErrorMessage>
                    );
                })}
        </div>
    );
}
