# wepy-cli

> 基础框架,wepy-cli脚手架的升级版,扩展为更适合项目开发目录结构

### 安装依赖包
	cnpm install

### 开发实时编译。
	npm run dev

### 生产压缩
	npm run build //上传代码时，请先执行此命令，否则会提示包体积过大

### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择dist目录。

2、微信开发者工具-->项目-->关闭ES6转ES5。 <font color=red>重要：漏掉此项会运行报错。</font> 

3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。  <font color=red>重要：某些情况下漏掉此项也会运行报错。</font> 

4、微信开发者工具-->项目-->关闭代码压缩上传。  <font color=red>重要：开启后，会导致真机computed, props.sync 等等属性失效。</font> 

### 阿里图标库iconfont重要说明
iconfont文件样式用css,需要修改成less,建议用远程服务器  <font color=red>重要：漏掉此项iconfont会编译不成功。</font> 

## 目录结构
```
├── dist                     // 运行npm run dev指令,生产静态文件
├── node_modules             // 第三方依赖包
├── src                      // 生产目录
│   ├── api                  // API网络请求
│   ├── assets               // 图片资源
│   ├── components           // 自定义组件
│   ├── iview                // UI组件
│   ├── mixin                // 工具函数
│   ├── pages                // 生产页面结构目录
│   ├── plugin               // 第三方插件库JS
│   ├── store                // 状态管理树redux
│   ├── style                // 样式
│   ├── util                 // 公共JS方法
│   ├── app.wpy              // 微信APP实例化入口
│   └── index.template.html  // web端index模板
├── web                      // 运行npm run dev:web指令,生产静态文件web端代码
├── .editorconfig            // editor配置
├── .eslintignore            // eslint忽略编译规则配置
├── .eslintrc.js             // eslint编译规则配置
├── .gitignore               // git忽略提交文件配置
├── .prettierrc              // prettier规则配置
├── .wepycache               // wepy缓存文件配置
├── .wepyignore              // wepy忽略文件配置
├── .postcssrc.js            // postcss配置
├── package-lock.json        // 第三方依赖包锁定安装
├── package.json             // 第三方依赖包安装
├── project.config.js        // 小程序project配置
├── README.md                // 说明文档
├── wepy.config.js           // wepy配置
```

## 技术说明文档
| 描述                       | 依赖包                   | 备注                      |
|----------------------------|--------------------------|---------------------------|
| 模拟数据请求               | mock                     |暂无                       |
| 基础UI框架                 | iview                    |暂无                       |
| 样式支持less               | wepy-compiler-less       |暂无                       |
| 状态管理树                 | redux                    |暂无                       |
| html解析wxml样式           | wxParse                  |插件中wxParse.js存在数据data赋值的BUG, wxParse.wxss文件中样式存在BUG,已被修复;|

## 欢迎有兴趣的小伙伴给点提议,在Issues中留言.后期会扩展组件