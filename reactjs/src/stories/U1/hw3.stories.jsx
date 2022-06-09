import React from 'react'
import TimerComponent from '../../U1/hw3/Timer'
import TimerDocument from './U1-hw3-Timer.mdx'

export default {
    title: 'U1/hw3/Timer',
    component: TimerComponent,
    parameters: {
        docs: {
            page: TimerDocument
        }
    }
}

export const Timer = () => <TimerComponent />