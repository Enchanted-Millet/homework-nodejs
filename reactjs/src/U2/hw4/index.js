import React from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';

const colors = css`
    :root {
        --color-white: #fff;
        --color-indigo: rgba(63, 116, 202, 1);
        --color-indigo-light: rgba(63, 116, 202, 0.82);
        --color-athens-gray: #f7f8fa;
        --color-shuttle-gray: #525c6b;
    }
`;

const PhoneContainer = styled.div`
    margin: auto;
    padding: 10vh 1.5vh;
    border-radius: 6vh;
    position: relative;
    width: fit-content;
    border: 0.5vh solid var(--color-shuttle-gray);
`;

const Screen = styled.div`
    width: 36vh;
    background: linear-gradient(
        to top,
        var(--color-indigo-light) 11.5vh,
        var(--color-indigo) 11.5vh
    );
    border: 0.5vh solid var(--color-shuttle-gray);

    header {
        border: 1px dashed pink;
        text-align: center;
    }

    main {
        display: flex;
        flex-wrap: wrap;
        padding: 1.5vh;
        justify-content: space-between;
    }
`;

const Icon = styled.button`
    width: 6vh;
    height: 6vh;
    margin: 1.5vh 0.5vh;
    border-radius: 1.5vh;
    background-color: var(--color-athens-gray);

    &:active {
        opacity: 0.75;
    }

    &:nth-last-of-type(-n + 4) {
        margin-top: 3vh;
    }
`;

export default function Layout() {
    const icons = new Array(20).fill(0).map((_, i) => {
        return <Icon key={i}>{i + 1}</Icon>;
    });

    return (
        <>
            <Global styles={colors} />
            <PhoneContainer>
                <Screen>
                    <header>status bar</header>
                    <main>{icons.map(icon => icon)}</main>
                </Screen>
            </PhoneContainer>
        </>
    );
}
