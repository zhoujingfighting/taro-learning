import Taro, { Component } from '@tarojs/taro'
import * as React from 'react';
import { Image, Swiper, SwiperItem } from '@tarojs/components'
import { getBanner } from '../../../api/homePage'
// eslint-disable-next-line import/first
import './index.css'

const SwiperComponent = () => {
    const [swiperList, setSwiperList] = React.useState([])
    React.useEffect(() => {
        getBanner().then(res => {
            setSwiperList((res as any).banners);
            console.log(res)
        })
    }, [])
    return (
        <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
        >
        {
            swiperList.map(list =>
                <SwiperItem>
                    <Image src={(list as any).imageUrl as string} className='homepage-banner-image'></Image>
                </SwiperItem>)
        }
        </Swiper>
    )
}
export default SwiperComponent;
