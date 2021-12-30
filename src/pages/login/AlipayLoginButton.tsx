import Taro  from '@tarojs/taro'
import * as React from 'react'
import { Button } from '@tarojs/components'

import './index.scss'

export default function LoginButton(props) {
  const [isLogin, setIsLogin] = React.useState(false)

  async function onGetAuthorize(_res) {
    setIsLogin(true)
    try {
      let userInfo = JSON.stringify(await Taro.getOpenUserInfo())

      const { avatar, nickName } = JSON.parse(userInfo)

      await props.setLoginInfo(avatar, nickName)
    } catch (err) {
      console.log('onGetAuthorize ERR: ', err)
    }

    setIsLogin(false)
  }

  return (
    <Button
      openType='getAuthorize'
      scope='userInfo'
      onGetAuthorize={onGetAuthorize}
      type='primary'
      className='login-button'
      loading={isLogin}
    >
      支付宝登录
    </Button>
  )
}