import React, { Component } from 'react'
import 'antd/dist/antd.less'

const U1 = React.lazy(() => import('./U1'))
const U2 = React.lazy(() => import('./U2'))
const U3 = React.lazy(() => import('./U3'))
const U4 = React.lazy(() => import('./U4'))
const U5 = React.lazy(() => import('./U5'))
const U6 = React.lazy(() => import('./U6'))
const U7 = React.lazy(() => import('./U7'))
const U8 = React.lazy(() => import('./U8'))

export default class App extends Component {
    render() {
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
                <U8 />
            </React.Suspense>
        )
    }
}
