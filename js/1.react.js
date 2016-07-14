// react-dom 之后会在 window.ReactDOM的全局属性
/**
 * React是个专注于视图渲染的库
 */
ReactDOM.render(
    <h1>hello</h1>,//第一个参数是要指要插入的标签
    document.querySelector('#app')//指定要被插入到内部的DOM元素
);