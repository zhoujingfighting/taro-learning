import Taro from "@tarojs/taro"
import { AtList, AtListItem } from "taro-ui"
interface Props {
    title: string,
    id: string
}
const SongElement = (props: Props) => {
 const innerAudioContext = Taro.createInnerAudioContext()
    innerAudioContext.src = 'http://m801.music.126.net/20221213224844/90f5eff1d0dfe6698814d234aa370806/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/17718423960/7107/69c1/ba2c/f0e2ff284f724ee125c04d0d1130e2e0.mp3'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    return <AtListItem title={props.title} onClick={ () => 
        innerAudioContext.play() }
        >
    </AtListItem>
}

export default SongElement;
