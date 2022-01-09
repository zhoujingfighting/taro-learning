import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import * as React from 'react';
import { Image, Swiper, SwiperItem, View } from '@tarojs/components'
import { getBanner } from '../../../api/homePage'

const SwiperComponent = () => {
    const [swiperList, setSwiperList] = React.useState([])
    React.useEffect(() => {
        getBanner().then(res => {
              setSwiperList((res as any).banners); 
              console.log(res)
        })
    }, ['test'])
    return (
        /**
         * FIXME : trhe style need to be modified later
         */
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
            {
                // eslint-disable-next-line react/jsx-key
                swiperList.map(list => <SwiperItem>
                    <Image src={(list as any).imageUrl as string}></Image>
                    {/* <Image src='http://p1.music.126.net/bDWLYy8yoL3XhINGiXjxyw==/109951166908835728.jpg'></Image> */}
                </SwiperItem>)
            }

        </Swiper>
    )
}
export default SwiperComponent;
