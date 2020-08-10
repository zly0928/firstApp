# firstapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


1. 编程工具
2. ESlint , 格式化，代码提示
3. 单引号还是双引号？
4. 前后端交互 调接口axios    模拟数据
5. 样式文件，本页面的放在同一目录下，公共的放在assets
6. checklist https://youzan.github.io/vant/#/zh-CN/style-guide




2. 查询区初始值是什么，选择器？下拉菜单？
3. 为什么package.json中是 webpack-dev-server ，而不是vue-cli-service呢
4. 怎么调试
5. 样式调整

vue实例中data可以是对象、函数；vue的组件中data必须是函数
方法：method（与实例挂钩）  函数：function
1. 是否还在维护，是否满足移动端


这是一个vue+webpack的项目，webpack相关配置在build文件夹下


1. iconfont.css 好像需要css-loader   https://zhuanlan.zhihu.com/p/65117497
2. 父子组件之间传递参数 props  https://www.cnblogs.com/zouwangblog/p/11149588.html
3. style中的lang scoped  rem
    <style lang="scss"> <style lang="lcss"> 等应该是先需要安装对应的预处理器
    npm install -D sass-loader sass  npm install -D less-loader less


问题：
1. 点击 返回 ，回到之前的页面时，好像这个页面会初始化，而不是我点击之前的状态


axios:
1. 封装的目的是：1）对于不同的环境，设置不同的请求url  2)对于头部设置  3）对于请求、相应拦截


是否分页呢，对于排序   entity、orderby、pager
header-tab固定
为什么需要用箭头函数呢

中英文转化
ES6通过插件转变为浏览器识别的语言   Babel
ES6与ES5的区别：理解为var /  let 、const？
this当前对象

cli脚手架：https://cli.vuejs.org/zh/guide/cli-service.html#使用命令
1. 涉及到cve-cli-service [options]   cve-cli-build [options]
2. 环境变更相关配置
3. 构建、部署

命令式编程范式 / 声明式编程范式{{}}，这样 数据与界面显示分离，显示在{{}},数据在data:[],只修改data不需要改view，则view会自动修改，（验证：在浏览器的console中修改data，页面会看到修改内容）



快捷键  div#app会创建一个id为app的div标签

语法糖：即别名  v-on:click @click

过滤器

生命周期
1. vue的不同阶段，回调钩子函数，执行操作
2. 组件的生命周期——created 常用来执行网络请求，将请求内容赋值到data中

模板设置vscode：文件-首选项-用户片段
各种语法  （标签可以使用、template也可以使用）
Moustache语法
{{firstname + ' ' + lastname}}可以是变量、也可以是表达式

v-cloak指令：斗篷，解决页面卡顿问题——有这个指令属性时，将样式改为隐藏，执行后移除执行，样式改为显示
v-bind 绑定属性
{{}}是在标签的content的值，而不能作为标签的属性值展示

属性类的  v-on:click   v-bind:src
内容类的 v-text='<a/>'



1. 打包
https://blog.csdn.net/Oopspw/article/details/101492023?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~first_rank_v2~rank_v25-1-101492023.nonecase


