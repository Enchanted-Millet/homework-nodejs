import React from 'react'
import NavBar from './NavBar'
import styled from '@emotion/styled'

const news = [
    {
        title: 'first news of all',
        subtitle: 'this is subtitle',
        content: (
            <>
                <p>
                    If you're familiar with the JavaScript ecosystem, React, and
                    React Router, this serves as a quick overview of React
                    Router v6 with lots of code and minimal explanations
                </p>
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
            </>
        ),
        location: 'San Jose, CA'
    },
    {
        title: 'Building on the Foundation of Love, Hope and Unity',
        subtitle: 'Church Anniversary and Dedication Service',
        content: (
            <p>
                This article covers the reasoning behind using the
                dangerouslySetInnerHTML property in a React application, which
                is the equivalent of the innerHTML attribute in browser DOM.
            </p>
        ),
        location: 'London, UK'
    }
]

const NewsContainer = styled.div`
    width: 800px;
    padding: 20px;
    margin: 20px auto;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 3px 3px 5px gainsboro;
`

const Subtitle = styled.p`
    font-size: 1.2rem;
`

const Location = styled.p`
    font-size: 0.85rem;
    color: #888888;
    margin-top: 10px;
`

const SingleNews = ({ title, subtitle, content, location }) => {
    return (
        <NewsContainer>
            <h1>{title}</h1>
            <Subtitle>{subtitle}</Subtitle>
            <article>{content}</article>
            <Location>{location}</Location>
        </NewsContainer>
    )
}

const News = () => {
    return (
        <>
            <NavBar />
            {news.map((newsProps, idx) => (
                <SingleNews key={idx} {...newsProps} />
            ))}
        </>
    )
}

export default News
