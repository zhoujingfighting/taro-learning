import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import * as React from 'react';
import { View } from '@tarojs/components'
import { getRecommend } from '../../../api/homePage'
// eslint-disable-next-line import/first

const RecommendComponent = () => {
    const [swiperList, setSwiperList] = React.useState([])
    React.useEffect(() => {
        getRecommend().then(res => {
              console.log('1111', res)
        })
    }, ['test'])
    return (
        <View>
            fefefefqqq
        </View>
    )
}
export default RecommendComponent;