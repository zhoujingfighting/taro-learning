import * as React from 'react';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import HTTP from '../../utils/axios'
import './index.css'
import SwiperComponent from './swiper';

const  Index  = () => {
  React.useEffect( () => {
    const test = HTTP.get('/playlist/hot')
    test.then(res => console.log(res))
  })
    return (
      <View className='index'>
        <SwiperComponent></SwiperComponent>
        <AtButton 
          type='primary'
          onClick={() => console.log(1)}
        >Test</AtButton>
      </View>
    )
}

export default Index;
