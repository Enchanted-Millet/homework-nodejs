import React from 'react';

export default function InputText({ id, title, type = 'text', errors = [], ...props }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {title}
            </label>
            <input type={type} className="form-control" id={id} {...props} />
            {errors.length > 0 &&
                errors.map(error => {
                    return (
                        <div key={error.name} className="error-message">
                            {error.message}
                        </div>
                    );
                })}
        </div>
    );
}
