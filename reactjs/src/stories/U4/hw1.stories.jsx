import React from 'react'
import GithubPageComponent from '../../U2/hw1'
import GithubPageDocument from './U4-hw1-GithubPage.mdx'

export default {
    title: 'U4/hw1/GithubPage',
    component: GithubPageComponent,
    parameters: {
        docs: {
            page: GithubPageDocument
        }
    }
}

export const GithubPage = () => <GithubPageComponent />