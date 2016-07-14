/**
 * js+xml  js+html
 * render第一个参数有且只有一个顶级DOM元素
 * render第一个参数是一种以类似于DOM元素描述的虚拟DOM元素
 * style的属性等一个JS对象
 * className等于一个类名 不能使用class 因为 class是JS的关键字
 */

var names = ['张三','李四','王楠'];
var style = {color:'red'};
ReactDOM.render(
    <div>
        {
            names.map(function(item,index){
                return <div className="blue" style={style} key={index}>{item}</div>
            })
        }
    </div>,
    document.querySelector('#app')
);