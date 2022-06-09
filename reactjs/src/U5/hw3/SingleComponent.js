import React from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'

const SingleContainer = styled.div`
    width: 400px;
    height: 200px;
    margin: auto;
    border: 1px solid steelblue;
    padding: 1rem;
    background-color: ${props => props.background};
`

const SingleComponent = ({
    handleComponentName,
    background,
    componentsName
}) => {
    const params = useParams()
    const { componentId } = params
    const componentName = componentsName[componentId]

    const handleChange = e => {
        handleComponentName(componentId, e.target.value)
    }

    return (
        <SingleContainer background={background[componentId]}>
            <label
                htmlFor={`${componentName + componentId}`}
                className="form-label"
            >
                Component name:
            </label>
            <input
                type="text"
                id={`${componentName + componentId}`}
                className="form-control"
                onChange={handleChange}
                value={componentName}
            />
        </SingleContainer>
    )
}

export default SingleComponent
