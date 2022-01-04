/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-restricted-globals */
import Taro from "@tarojs/taro";
import * as React from 'react';
import { View, Button} from "@tarojs/components"
import { AtTimeline, AtList, AtListItem, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import LoginButton from "./loginButton";

const LoginComponent = () => {
    const [modalOpenState, setModalOpenState] = React.useState(false)
    
    return (
        <View>
            <View className='at-article__h1'>
                项目简介
            </View>
            <View className='at-article__info'>
                起始于2021/12/30，宿舍，微凉！！本项目是周晶同志练手微信小程序用，主要是做一个简单的音乐播放器

            </View>
            <AtList>
                <AtListItem title='技术栈: React + taro + typescript' />
                <AtListItem title='周晶个人链接' onClick={() => setModalOpenState(true)} />
                <AtListItem title='Api全部来自网易云音乐api' />
            </AtList>
            <AtModal 
                isOpened={modalOpenState}
            
            >
                <AtModalHeader>被骗进来了吧，哈哈哈哈哈</AtModalHeader>
                <AtModalContent>
                    你在期待什么？？？
                    想屁吃呢。。。。
                    哼，就让你啥也看不到
                </AtModalContent>
                <AtModalAction><Button onClick={() => setModalOpenState(false)}>确定</Button> </AtModalAction>
            </AtModal>
            <AtTimeline
                items={[
                    { title: '查看项目简介', color: 'red', icon: 'check-circle' },
                    { title: '登陆账号', color: 'red', icon: 'check-circle' },
                    { title: '开始听歌', color: 'red', icon: 'check-circle' }
                ]}
            >
            </AtTimeline>
            {/* 这个处理简单的手机号码登录逻辑 */}
            <LoginButton></LoginButton>
        </View>
    )
}

export default LoginComponent;
