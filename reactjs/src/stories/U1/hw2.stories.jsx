import React from 'react'
import CounterComponent from '../../U1/hw2/Counter'
import CounterDocument from './U1-hw2-Counter.mdx'

export default {
    title: 'U1/hw2/Counter',
    component: CounterComponent,
    parameters: {
        docs: {
            page: CounterDocument
        }
    }
}

export const Counter = () => <CounterComponent />