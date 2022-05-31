import React, { Component } from 'react';
import styled from '@emotion/styled';
import InputText from './InputText';

const StyledForm = styled.form`
    width: 400px;
    margin: auto;
    position: relative;
`;

const StyledCheckbox = styled.input`
    border: ${props => (props.errors ? '2px solid red' : 'none')};
`;

const initialState = {
    username: { value: 'SteveJobs', errors: [] },
    email: { value: 's.jobs@apple.com', errors: [] },
    confirmEmail: { value: 's.jobs@apple.com', errors: [] },
    password: { value: '1QQ2ww3ee', errors: [] },
    devSkills: { value: '5', errors: [] },
    terms: { checked: true, errors: [] }
};

const emptyState = {
    username: { value: '', errors: [] },
    email: { value: '', errors: [] },
    confirmEmail: { value: '', errors: [] },
    password: { value: '', errors: [] },
    devSkills: { value: '', errors: [] },
    terms: { checked: false, errors: [] }
};
Object.freeze(initialState);
Object.freeze(emptyState);

const getErrorMessage = (key, option = {}) => {
    const mapping = {
        required: 'Required',
        isEmail: 'Please provide a valid Email',
        isSame: 'Please provide the same Email',
        minLength: `Must be at least ${option.minLen} characters`,
        containNumber: 'Must be at least one number',
        digit1To10: 'Must be a number between 1 and 10',
        accepted: 'Required'
    };
    return mapping[key];
};

export default class Form extends Component {
    state = {
        username: { value: 'SteveJobs', errors: [] },
        email: { value: 's.jobs@apple.com', errors: [] },
        confirmEmail: { value: 's.jobs@apple.com', errors: [] },
        password: { value: '1QQ2ww3ee', errors: [] },
        devSkills: { value: '5', errors: [] },
        terms: { checked: true, errors: [] }
    };

    requirements = {
        username: () => ({
            required: this.state.username.value.length > 0
        }),
        email: () => ({
            required: this.state.email.value.length > 0,
            isEmail:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }),
        confirmEmail: () => ({
            required: this.state.confirmEmail.value.length > 0,
            isSame: this.state.email.value === this.state.confirmEmail.value
        }),
        password: ({ minLen }) => ({
            minLength: this.state.password.value.length >= minLen,
            containNumber: /\d+/
        }),
        devSkills: () => ({
            digit1To10: /[1-9]|10/
        }),
        terms: () => ({
            accepted: this.state.terms.checked
        })
    };

    getValue = name => {
        return this.state?.[name]?.value;
    };

    getErrors = name => {
        return this.state?.[name]?.errors;
    };

    handleChange = name => e => {
        if (Object.keys(this.state).includes(name)) {
            if (name === 'terms') {
                this.setState({
                    terms: {
                        ...this.state.terms,
                        checked: !this.state.terms.checked
                    }
                });
            } else {
                this.setState({
                    [name]: { ...this.state[name], value: e.target.value }
                });
            }
        }
    };

    handleValidate =
        (name, option = {}) =>
        _ => {
            const require = this.requirements?.[name];
            if (require) {
                const field = this.state[name];
                const errors = [];
                for (let [name, validator] of Object.entries(require(option))) {
                    if (typeof validator === 'boolean') {
                        if (!validator) {
                            errors.push({
                                name,
                                message: getErrorMessage(name, option)
                            });
                        }
                    } else {
                        // else it must be Regex
                        if (!validator.test(field.value)) {
                            errors.push({
                                name,
                                message: getErrorMessage(name, option)
                            });
                        }
                    }
                }
                this.setState({ [name]: { ...field, errors } });
            }
        };

    handleSubmit = async e => {
        e.preventDefault();
        Promise.all([
            this.handleValidate('username')(),
            this.handleValidate('email')(),
            this.handleValidate('confirmEmail')(),
            this.handleValidate('password', { minLen: 8 })(),
            this.handleValidate('devSkills')(),
            this.handleValidate('terms')()
        ])
            .then(() => {
                for (let { errors } of Object.values(this.state)) {
                    if (errors.length > 0) {
                        return Promise.resolve(true);
                    }
                }
                return Promise.resolve(false);
            })
            .then(hasError => {
                if (!hasError) {
                    const result = Object.entries(this.state).reduce(
                        (acc, [name, { value }]) => {
                            acc[name] = value;
                            return acc;
                        },
                        {}
                    );
                    alert(JSON.stringify(result));
                }
            });
    };

    handleReset = () => {
        this.setState(initialState);
    };

    handleClear = () => {
        this.setState(emptyState);
    };

    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit} autoComplete="off">
                <h2>Form Register</h2>
                <InputText
                    id="username"
                    title="Username"
                    placeholder="Your username"
                    onChange={this.handleChange('username')}
                    value={this.getValue('username')}
                    onBlur={this.handleValidate('username')}
                    errors={this.getErrors('username')}
                />
                <InputText
                    id="email"
                    type="email"
                    title="Email"
                    placeholder="Your Email"
                    onChange={this.handleChange('email')}
                    onBlur={this.handleValidate('email')}
                    value={this.getValue('email')}
                    errors={this.getErrors('email')}
                />
                <InputText
                    id="confirm-email"
                    type="email"
                    title="Confirm Email"
                    placeholder="Confirm your Email"
                    onChange={this.handleChange('confirmEmail')}
                    onBlur={this.handleValidate('confirmEmail')}
                    value={this.getValue('confirmEmail')}
                    errors={this.getErrors('confirmEmail')}
                />
                <InputText
                    id="password"
                    type="password"
                    title="Password"
                    placeholder="Your Password"
                    onChange={this.handleChange('password')}
                    onBlur={this.handleValidate('password', { minLen: 8 })}
                    value={this.getValue('password')}
                    errors={this.getErrors('password')}
                />
                <InputText
                    id="dev-skills"
                    title="Dev Skills (1 - 10)"
                    placeholder="Score your dev skills (1 - 10)"
                    onChange={this.handleChange('devSkills')}
                    onBlur={this.handleValidate('devSkills')}
                    value={this.getValue('devSkills')}
                    errors={this.getErrors('devSkills')}
                />
                <div className="mb-3">
                    <StyledCheckbox
                        type="checkbox"
                        className="form-check-input me-1"
                        id="terms"
                        onChange={this.handleChange('terms')}
                        checked={this.state.terms.checked}
                        errors={this.getErrors('terms')}
                    />
                    Accept Terms
                </div>
                <div
                    className="btn-group"
                    role="group"
                    style={{ width: '100%' }}
                >
                    <input
                        id="submit"
                        type="submit"
                        value="Submit"
                        className="btn btn-outline-primary"
                    />
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={this.handleClear}
                    >
                        Clear
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={this.handleReset}
                    >
                        Reset
                    </button>
                </div>
            </StyledForm>
        );
    }
}
