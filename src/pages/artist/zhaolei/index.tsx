import * as React from 'react';
import { AtList, AtListItem } from "taro-ui"
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'
import { getZhaolei } from '../../../api/song';
import SongElement from '../../base/audio';
const ZhaoLei = () => {
    const [zhaolei, setZhaolei] = React.useState([]);
    React.useEffect(() => {
        getZhaolei({ id: "6731" }).then(res => {
            console.log(res["hotSongs"])
            setZhaolei(res["hotSongs"])
        })
    }, [])
    return (
              <View className='components-page'>
                { 
                    zhaolei.map(item => <SongElement title={(item as any).al.name} id = {(item as any).al.id}/>)
                }   
            </View>
    )
}

export default ZhaoLei;
