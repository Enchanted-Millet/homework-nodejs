import React, {Fragment, useState} from 'react';
import './App.css';

import Calendar from './components/Calendar';

function App() {

    const [showDate, setShowDate] = useState('');
    const receiveDateHandler = (props) => {
        setShowDate(props);
    }

    return (
        <Fragment>
            <section className="is-primary">
                <div className="body">
                    <div className="container">
                        <h1 className="title has-text-centered">Calendar</h1>
                    </div>
                </div>
            </section>
            <div className="container has-text-centered">
                <Calendar onReceiveinfo={receiveDateHandler}/>
            </div>

            <div className="container has-text-centered">
            {showDate}
            </div>
        </Fragment>
    );
}

export default App;
