import * as React from 'react';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'

const Maobuyi = () => {
    const innerAudioContext = Taro.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://localhost:3000/song/url?id=75738663';
    innerAudioContext.play();
    innerAudioContext.volume = 1;
    innerAudioContext.onPlay(() => {
        console.log('开始播放1111')
    })
    innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
    })
    return (
        <View className='index'>
            Test11166
        </View>
    )
}

export default Maobuyi;
