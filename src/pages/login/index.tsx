/* eslint-disable jsx-quotes */
import { View } from "@tarojs/components"
import { AtTimeline } from 'taro-ui'
import LoginButton from "./loginButton";

const LoginComponent = () => {
    return (
        <View>
            <View className='at-article__h1'>
                项目简介
            </View>
            <View className='at-article__info'>
                起始于2021/12/30，宿舍，微凉！！
            </View>
            <AtTimeline
              items={[
                    { title: '查看项目简介',  color: 'red', icon:'check-circle' },
                    { title:'登陆账号', color: 'blue', icon:'check-circle'  },
                    { title: '开始听歌', color:'red', icon:'check-circle'  }
                ]}
            >
            </AtTimeline>
            <LoginButton></LoginButton>
        </View>
    )
}

export default LoginComponent;
