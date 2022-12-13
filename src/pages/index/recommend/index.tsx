import Taro from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

const RecommendComponent = () => {
    return (
        <View>
            <AtList>
                <AtListItem title='赵雷' onClick={() => Taro.navigateTo({
                    url: "/pages/artist/zhaolei/index"
                })}
                ></AtListItem>
                <AtListItem title='毛不易' onClick={() => Taro.navigateTo({
                    url: "/pages/artist/maobuyi/index"
                })}></AtListItem>
            </AtList>
        </View>
    )
}
export default RecommendComponent;