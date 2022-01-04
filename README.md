## 开发时应该打开压缩选项，因为热编译会报错

```js
# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type weapp --watch # Windows
$ NODE_ENV=production taro build --type weapp --watch # Mac
```

## 接口设置
* 如果是自己练习项目玩，直接使用网易云接口
* 如果是有自己的借口服务器的话，请直接使用自己的服务器api