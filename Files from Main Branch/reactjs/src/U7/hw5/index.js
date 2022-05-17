import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { combineJsonAndXml } from '../redux/actions/data';
import { FETCH_STATUS } from '../redux/reducers/data';
import Table from './Table';

const Spinner = () => {
    return (
        <div
            className="spinner-border text-primary"
            style={{ width: '5rem', height: '5rem' }}
            role="status"
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

const LoadError = () => {
    return <div>Something wrong!</div>;
};

const DataCombine = () => {
    const state = useSelector(state => state.hw5);
    const { dataFetchStatus } = state;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(combineJsonAndXml());
    }, []);

    const renderContent = () => {
        switch (dataFetchStatus) {
            case FETCH_STATUS.INITIAL:
            case FETCH_STATUS.PROCESSING:
                return <Spinner />;
            case FETCH_STATUS.SUCCESSFUL:
                return <Table />;
            case FETCH_STATUS.FAILED:
                return <LoadError />;
            default:
                return;
        }
    };

    return (
        <div className="d-flex justify-content-center">{renderContent()}</div>
    );
};

export default DataCombine;
