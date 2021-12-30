import * as React from 'react';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import HTTP from '../../utils/axios'
import './index.css'

const  Index  = () => {
  React.useEffect( () => {
    const test = HTTP.get('/playlist/hot')
    test.then(res => console.log(res))
  })
    return (
      <View className='index'>
        <Text>Welcome to zhoujing Taro programeee</Text>
        <AtButton 
          type='primary'
          onClick={() => console.log(1)}
        >Test</AtButton>
      </View>
    )
}

export default Index;
