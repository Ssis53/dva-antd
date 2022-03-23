### dva-cli + antd笔记

1. 
```
  var myIterable = {};
      myIterable[Symbol.iterator] = function* () {
        yield 4*5;
        yield 2+1;
        yield 10/2;
      };
    console.log([...myIterable]);
```

    可以把一个对象的Symbol.iterator属性赋值为一个generator对象，这样这个对这样这个对象就是可迭代可遍历的了

2. dva中dispatch触发的事effects中的对应generator函数，effects相当于一个中间件，异步操作在这里面用generator和yield处理。
  通过yield 的暂停线程执行的方法实现同步异步操作。
  异步操作完成后的最终值通过
  yield put('add', data: payload);传给reducerce。

3. antd通过babel-plugin-import实现按需加载，只需在.webpackrc中配置

    "extraBabelPlugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ]
    ]
即可

4. antd组件中可以再套组件，但是是通过属性中嵌套函数然后render出来的，这样也可以直接访问最外层自定义组件的props，从而使用我们定义的方法或绑定事件——闭包特性，内层函数可以访问外层函数中的变量、参数和方法。

5. 反向代理，在.webpackrc中配置
    "proxy": {
        "/api": {
          "target": "http://api.loozb.com",
          "changeOrigin": true,
          "pathRewrite": { "^/api" : "api" }
        }
      }

注意事项
对于POST, PATCH之类的请求方法，使用fetch方法发送异步请求的时候，需要指定headers:
// services下面的响应方法中添加报头
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json' // 修复php实现的api无法解析请求body的问题，比如，无法获取到响应的POST参数，PATCH参数之类的问题。
}

6. CSS Modules
dva使用了cssModules，所以css文件构建之后的id和类名选择器都是带有唯一标识码的。想在jsx中让该选择器样式生效必须要引入这个css文件的实例。然后用
    id={styles.id},  className={styles.class} 的形式让元素id和类名都带有唯一标识码，这样才能生效。

如果需要全局修改类名的样式的话（如antd自带的类名）：
    li:global(.ant-pagination-item:hover) {
        background-color: #f60;
    }

    这样css的选择器是不带唯一标识码的。

7. 主题样式定制
    官方方法一：
    (1)把按需加载改成如下：

    "extraBabelPlugins": [
        [
            "import",
            {
                "libraryName": "antd-mobile",
                "libraryDirectory": "es",
            +++ "style": true
            --- "style": "css"
            }
        ]
    ]
    true位布尔值

    (2)在webpackrc中加如下字段：
    "theme": "./theme.js"

    (3)创建them.js：
    module.exports = () => {
      return {
        "@primary-button-fill": "#f60"
      };
    };



  8. 把.webpackrc改为.webpackrc.js以增加灵活性
  const path = require('path');
  const AUI_DOMAIN = process.env.CONFLUX == 'true'? '/sat':'';
  const publicPath = process.env.CONFLUX == 'true'? '/sat':'/'
  const NODE_ENV = process.env.NODE_ENV;


  export default {
    publicPath,
    extraBabelPlugins: [
      ["import", { "libraryName": "antd", "libraryDirectory": "es", "style":true}]
    ],
    // proxy: {
    //   "/api": {
    //     target: "http://sat.aliyun.com",
    //     changeOrigin: true,
    //     logLevel:"debug"
    //   }
    // },
    define:{
      DOMAIN: 'AUI_DOMAIN'
    },
    "theme": "./theme.js"
  }


  9. 通过修改script语句使用cross-env来判断环境
  "scripts": {
    "start": "roadhog dev",
    "start-conflux": "cross-env CONFLUX=true&&set DISABLE_ESLINT=true&&set PORT=3000&&roadhog dev",
    "build": "roadhog build"
  }

  注意：在windows下 设置端口号要用set PORT=5300&&roadhog dev/server，关闭ESlint也是
  set DISABLE_ESLINT=true。 同时语句间隔开用的是&&连接符而不是空格。
  在mac上有所不同
