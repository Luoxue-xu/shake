# 摇一摇 shake

### 介绍

这是一个 web 版的摇一摇，想法来源于微信摇一摇功能，结合 HTML5 的api实现。

主要功能是通过摇一摇来切歌，随机摇出一首歌。

### 原理

主要是通过监听 devicemotion 事件，然后根据返回的 event.accelerationIncludingGravity 的值来判断摇动，具体可以看源码 shake.js

### 使用

采用 es6 模块化书写，可以如下调用：

```
import Shake from './shake';

let myShake = new Shake({
    timer: 2000, // 每次摇一摇的间隔时间
    threshold: 10 // 多大摇动幅度可以触发摇一摇 数值越大，表示摇动的幅度要越大.
});

// 监听摇一摇
myShake.on('shake', (data) => {
    // 摇成功之后的处理
});
```

### 不足

1、有可能两次摇出同一首歌，因为没有做比较；

2、摇一摇的声音需要先手动触发，后面执行play才有效的问题；
