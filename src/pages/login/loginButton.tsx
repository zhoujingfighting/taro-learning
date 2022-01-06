import Taro from "@tarojs/taro";
import { useState } from "react";
import { View, Input } from "@tarojs/components";
import { AtIcon, AtButton, AtToast } from "taro-ui";
import  { phoneLogin } from '../../api/login'

type InputType = "phone" | "password";
/**
 * 登录页面可以分为好几种登陆 
 * 1 ： 手机登录 
 *      1.1 ： 手机密码登录
 *      1.2 ： 手机验证码登录
 * 2 ： 扫码登录
 */
const LoginButton = () => {
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
            password
        } as any)
            .then(res => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useLoginStatus(res);
                console.log('hahahahahha');
            });
    }

    function handleChange(type: InputType, event) {
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
                      placeholder='手机号1'
                      className='login_content__input'
                      onInput={(e): void => {
                            handleChange("phone", e);
                        }}
                    />

                </View>
                <View className='login_content__item'>
                    <AtIcon value='lock' size='24' color='#ccc'></AtIcon>
                    <Input
                      type='text'
                      password
                      placeholder='密码'
                      className='login_content__input'
                      onInput={(e): void => {
                            handleChange("password", e);
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
    );
}
export default LoginButton;
