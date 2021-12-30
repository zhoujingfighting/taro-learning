/* eslint-disable jsx-quotes */
import { useState } from 'react'
import { Button } from '@tarojs/components'
// import './login.css'

const WeChatLoginButton = (props) => {
  const [isLogin, setIsLogin] = useState(false)

  async function onGetUserInfo(e) {
    setIsLogin(true)

    const { avatarUrl, nickName } = e.detail.userInfo
    await props.setLoginInfo(avatarUrl, nickName)

    setIsLogin(false)
  }

  return (
    <Button
      openType="getUserInfo"
      onGetUserInfo={onGetUserInfo}
      type="primary"
      className="login-button"
      loading={isLogin}
    >
      微信登录测试
    </Button>
  )
}
export default WeChatLoginButton
