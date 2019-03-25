# NEJTodo_Master



### 使用的技术

NEJ，Koa2， MongoDB

## 运行条件

安装Mongodb和koa，以管理员身份运行cmd
打开服务器 net start mongoDB

npm run mongo
npm run dev

在浏览器中访问`localhost:6666`

## 实现的功能

 显示所有todos列表

 可以添加新的todo元素到列表之后

 删除一个todo元素

 双击修改一个active状态的todo元素内容

 勾选确定已经完成的元素，显示成完成状态，再次点击勾选图标消除已完成状态并放入正在进行的active列表

 clearCompleted按钮可以清空所有的completed状态todo元素
 
  不同active  clearCompleted 和all 元素显示各自状态下列表

