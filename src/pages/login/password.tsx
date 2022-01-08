import Taro from "@tarojs/taro";
import { Input, View } from "@tarojs/components"
import { useState } from "react";
import { phoneLogin } from "../../api/login";
// eslint-disable-next-line import/first
import { AtButton, AtIcon, AtToast } from "taro-ui";

type input = 'phone' | 'password'
const PasswordComponent = () => {

    const [showLoading, setShowLoading] = useState<boolean>(false);
    const [showTip, setShowTip] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [tip, setTip] = useState<string>("");
    function login() {
        console.log('==login==');
        console.log(phone);
        console.log(password);
        /**
         * 应该检测手机号的格式正确与否
         * FIXME : 可以用正则表达式来判断
         */
        if (!phone) {
            setShowTip(true);
            setTip("请输入手机号")
            return;
        }
        if (!password) {
            setShowTip(true);
            setTip("请输入密码")
            return;
        }
        setShowLoading(true);
        phoneLogin( {phone, password}).then(res => {
            console.log(11111, res)
            if((res as any).code === 200) {
                Taro.navigateTo({
                    url: '/pages/index/index'
                })
            }
        })
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
                </View>
                <View className='login_content__item'>
                    <AtIcon value='lock' size='24' color='#ccc'></AtIcon>
                    <Input
                      type='text'
                      password
                      placeholder='请输入密码'
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
    )
}

export default PasswordComponent;
