## 开发时应该打开压缩选项，因为热编译会报错

```js
# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type weapp --watch # Windows
$ NODE_ENV=production taro build --type weapp --watch # Mac
```

## 接口设置
* 如果是自己练习项目玩，直接使用网易云接口
* 如果是有自己的借口服务器的话，请直接使用自己的服务器api
## 20220107更新
仓库中更新了一个网易云api的文件夹
本地开发建议如下操作开启后端接口服务器
```js
git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git \
cd NeteaseCloudMusicApi \
npm install 
node app.js
```
> <font color='red'>开发小程序时请务必保证后端服务器开启</font> 