import Taro from '@tarojs/taro';
import { AtButton } from 'taro-ui'

const  LoginButton = () => {
  return (

    <AtButton type='primary' onClick={async () => Taro.navigateTo({
      url:'../index/index'
    })}
    >
      普通登录
    </AtButton>
  )
}
export default LoginButton;
