import { useState } from 'react';
import Taro from '@tarojs/taro';
import { Input, View } from "@tarojs/components"
import { AtButton, AtIcon, AtToast } from "taro-ui";
import  { phoneLogin, getCaptha } from '../../api/login'

type input = 'phone' | 'captha'

const Captha = () => {
    //这里处理登录页面的登录逻辑
    // const { showLoading, tip, showTip } = this.state
    const [showLoading, setShowLoading] = useState<boolean>(false);
    const [showTip, setShowTip] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [tip, setTip] = useState<string>("");

    function useLoginStatus(res) {
        const { code } = res.data;
        console.log(code)
        // eslint-disable-next-line @typescript-eslint/no-shadow
        let tip = "登录成功";
        if (code !== 200) {
            tip = res.data.msg || "登录失败";
        }
        setShowLoading(false);
        setShowTip(true);
        setTip(tip);
        setTimeout(() => {
            setShowTip(false);
        }, 2000);
        if (code === 200) {
            Taro.setStorageSync("userInfo", res.data);
            Taro.setStorageSync("userId", res.data.account.id);
            Taro.navigateTo({
                url: "/pages/index/index"
            });
        }
    }
    async function _getCaptha() {
        const res = await getCaptha({
            phone
        })
        console.log('4222', res)
    }
    function login() {
        console.log('==login==');
        console.log(phone);
        console.log(password);
        /**
         * 应该检测手机号的格式正确与否
         * FIXME : 可以用正则表达式来判断
         */
        if (!phone) {
            this.setState({
                showTip: true,
                tip: "请输入手机号"
            });
            return;
        }
        if (!password) {
            this.setState({
                showTip: true,
                tip: "请输入密码"
            });
            return;
        }
        setShowLoading(true);
        phoneLogin({
            phone,
            password: password
        } as any)
            .then(res => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                console.log(res);
                console.log('hahahahahha');
            });
    }

    function handleChange(type: input, event) {
        const { value } = event.detail;
        if (type === "phone") {
            setPhone(value);
        } else {
            setPassword(value);
        }
    }
    return ( 
        <View className='login_container'>
        <View className='login_content'>
            <View className='login_content__item'>
                <AtIcon value='iphone' size='24' color='#ccc'></AtIcon>
                <Input
                  type='text'
                  placeholder='手机号111'
                  className='login_content__input'
                  onInput={(e): void => {
                        handleChange("phone", e);
                    }}
                />
                <AtButton onClick={() => _getCaptha()}>
                    {/* 这里应该还有验证码时间有效期的判断 */}
                    点击获取验证码
                </AtButton>
            </View>
            <View className='login_content__item'>
                <AtIcon value='lock' size='24' color='#ccc'></AtIcon>
                <Input
                  type='text'
                  placeholder='请输入验证码'
                  className='login_content__input'
                  onInput={(e): void => {
                        handleChange("captha", e);
                    }}
                />
            </View>
            <AtButton className='login_content__btn' onClick={() => login()}>
                登录
            </AtButton>
        </View>
        <AtToast
          isOpened={showLoading}
          text='登录中'
          status='loading'
          hasMask
          duration={3000}
        ></AtToast>
        <AtToast isOpened={showTip} text={tip} hasMask duration={2000}></AtToast>
    </View>
    )
}

export default Captha;