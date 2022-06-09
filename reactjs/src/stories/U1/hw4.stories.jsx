import React from 'react'
import ConversionComponent from '../../U1/hw4/Conversion'
import ConversionDocument from './U1-hw4-Conversion.mdx'

export default {
    title: 'U1/hw4/Conversion',
    component: ConversionComponent,
    parameters: {
        docs: {
            page: ConversionDocument
        }
    }
}

export const Conversion = () => <ConversionComponent />