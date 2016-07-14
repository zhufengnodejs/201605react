/**
 * 定义一个组件
 * Person是一个组件名称
 *
 */
var Person = React.createClass({
    //定义传递给组件的属性的类型，是否是否必传
    propTypes:{
        //定义名称必须传入，并是字符串
       name:React.PropTypes.string.isRequired,
        //定义性别必须传入，并是字符串
       gender: React.PropTypes.string.isRequired,
    } ,
    //指定默认属性
    getDefaultProps:function(){
        return {gender:'男'}
    },
    //指的是如何渲染此组件 此方法中的this=组件实例本身
    render:function(){
        //返回且只能返一个顶级标签
        // this=组件的实例本身
        // this.props指的是组件的属性对象
        return <div>
                    姓名:{this.props.name}<br/>
                    性别:{this.props.gender}
               </div>

    }
});
/**
 * 在渲染组件的时候可以向它里面传入属性
 * 这样的话组件的实例就拥有属性对象
 */
var props = {
    name:"zfpx",
    gender:'女'
}
ReactDOM.render(
    //<Person name="zfpx" gender="男"  />,
    <Person {...props} />,
    document.querySelector('#app')
);