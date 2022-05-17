import React from 'react';
import NavBar from './NavBar';
import './style.css';

const news = [
    {
        title: 'first news of all',
        subtitle: 'this is subtitle',
        content: (
            <p>
                If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick
                overview of React Router v6 with lots of code and minimal explanations
                <div>
                    <img
                        className="img-thumbnail"
                        src="https://images-na.ssl-images-amazon.com/images/S/mediaservice.woot.com/f1c06c5d-e992-4f77-992c-978f8caeadae._AC_SR278,208_.png"
                        alt="high velocity fan"
                    />
                    <img
                        className="img-thumbnail"
                        src="https://images-na.ssl-images-amazon.com/images/S/mediaservice.woot.com/edfa9057-bf9f-4128-bf72-e317debba62a._AC_SR278,208_.jpg"
                        alt="netgear rbk53"
                    />
                </div>
            </p>
        ),
        location: 'San Jose, CA'
    },
    {
        title: 'Building on the Foundation of Love, Hope and Unity',
        subtitle: 'Church Anniversary and Dedication Service',
        content: (
            <p>
                This article covers the reasoning behind using the dangerouslySetInnerHTML property in a React
                application, which is the equivalent of the innerHTML attribute in browser DOM.
            </p>
        ),
        location: 'London, UK'
    }
];

const SingleNews = ({ title, subtitle, content, location }) => {
    return (
        <div className="single-news">
            <h1>{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <article>{content}</article>
            <div className="location">{location}</div>
        </div>
    );
};

const News = () => {
    return (
        <>
            <NavBar />
            {news.map(newsProps => (
                <SingleNews {...newsProps} />
            ))}
        </>
    );
};

export default News;
