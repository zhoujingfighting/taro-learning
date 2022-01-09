import Taro from '@tarojs/taro'
// 好像没必要进行type判断
const platfomr = Taro.getSystemInfoSync();
const model = platfomr.model;

export const checkPlatForm = () => {
    if (model.startsWith('iphone')) {
       return '2';
    }
    else if (model.startsWith('ipad')) {
        return '3';
    }
}


