
//创建一个组件
//1 组件的名称要首字母大写
var Message = React.createClass({
    //定义如何渲染这个组件
   render:function(){
        //返回一个DOM元素
        //返回值有且只能有一个顶级DOM元素
        return <div>HELLO</div>
   }
});
    ReactDOM.render(
        <Message/>,//可以像普通的DOM标签一样使用
        document.querySelector('#app2')
    );

