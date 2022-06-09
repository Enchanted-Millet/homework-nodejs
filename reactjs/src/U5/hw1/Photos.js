import React from 'react'
import NavBar from './NavBar'
import styled from '@emotion/styled'

const photos = [
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/1200px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg',
        alt: 'yosemite-1'
    },
    {
        src: 'https://i.natgeofe.com/n/f14f6c30-8d11-4e33-a5e9-05f1b50bdde3/yosemite-national-park-california.jpg',
        alt: 'yosemite-2'
    },
    {
        src: 'https://media.cntraveler.com/photos/5b71a3d92211d70d9158ae1a/16:9/w_3344,h_1881,c_limit/Yosemite_GettyImages-632167865.jpg',
        alt: 'yosemite-3'
    },
    {
        src: 'https://a.cdn-hotels.com/gdcs/production126/d349/d2422886-1662-43cb-a356-4087bdbb59f8.jpg?impolicy=fcrop&w=800&h=533&q=medium',
        alt: 'yosemite-4'
    },
    {
        src: 'https://www.gannett-cdn.com/presto/2019/02/26/PVIT/be8b05f9-e019-47ab-adb4-c1a5366455ad-YosemiteNationalPark_Firefalls_02-22-2019_JustinKeys-5959.jpg?crop=4015,2285,x0,y0&width=3200&height=1822&format=pjpg&auto=webp',
        alt: 'yosemite-5'
    },
    {
        src: 'https://images.unsplash.com/photo-1562310503-a918c4c61e38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW9zZW1pdGUlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8&w=1000&q=80',
        alt: 'yosemite-6'
    },
    {
        src: 'https://www.nps.gov/yose/planyourvisit/images/vernal-fall-from-jmt-5.jpg',
        alt: 'yosemite-7'
    },
    {
        src: 'https://www.gannett-cdn.com/presto/2018/10/25/USAT/cdda9207-f7d8-443b-bf1c-78648063e409-AP_California_Daily_Life.JPG',
        alt: 'yosemite-8'
    }
]

const ImageWrapper = styled.div`
    width: 800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 10px;
`

const Img = styled.img`
    border-radius: 10px;
    box-shadow: #888888 3px 3px 5px;
    height: 225px;
`

const Photos = () => {
    const ImageList = () =>
        photos.map(({ src, alt }, idx) => <Img key={idx} src={src} alt={alt} />)
    return (
        <>
            <NavBar />
            <ImageWrapper>
                <ImageList />
            </ImageWrapper>
        </>
    )
}

export default Photos
