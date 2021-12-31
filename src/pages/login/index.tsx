import Taro from "@tarojs/taro";
import { View } from "@tarojs/components"
import { AtTimeline, AtList, AtListItem } from 'taro-ui'
import LoginButton from "./loginButton";

const LoginComponent = () => {
    return (
        <View>
            <View className='at-article__h1'>
                项目简介
            </View>
            <View className='at-article__info'>
                起始于2021/12/30，宿舍，微凉！！本项目是周晶同志练手微信小程序用，主要是做一个简单的音乐播放器

            </View>
            <AtList>
                <AtListItem title='技术栈: React + taro' />
                <AtListItem title='周晶资料 q1' onClick={() => Taro.navigateTo({
                    url: '../index/index'
                })}
                />
            </AtList>
            <AtTimeline
              items={[
                    { title: '查看项目简介', color: 'red', icon: 'check-circle' },
                    { title: '登陆账号', color: 'red', icon: 'check-circle' },
                    { title: '开始听歌', color: 'red', icon: 'check-circle' }
                ]}
            >
            </AtTimeline> 
            <LoginButton></LoginButton>
        </View>
    )
}

export default LoginComponent;
