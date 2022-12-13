import * as React from 'react';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import HTTP from '../../utils/axios'
import './index.css'
import SwiperComponent from './swiper';
import RecommendComponent from './recommend';

const Index = () => {
    React.useEffect(() => {
        const test = HTTP.get('/playlist/hot')
        test.then(res => console.log(res))
    })
    return (
      <View className='index'>
        <SwiperComponent></SwiperComponent>
        <AtButton 
          type='primary'
          onClick={() => console.log(1)}
        >Test111</AtButton>
        <RecommendComponent></RecommendComponent>
      </View>
      
    )
}

export default Index;
