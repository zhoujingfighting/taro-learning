import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import * as React from 'react';
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import { getRecommend } from '../../../api/homePage'

const RecommendComponent = () => {
    const [swiperList, setSwiperList] = React.useState([])
    React.useEffect(() => {
        getRecommend().then(res => {
              console.log('1111', res)
        })
    }, ['test'])
    return (
        <View>
            <AtList>
                <AtListItem title='赵雷' onClick={() => Taro.navigateTo({
                    url: "/pages/artist/zhaolei/index"
                })}
                >
                </AtListItem>
            </AtList>
        </View>
    )
}
export default RecommendComponent;