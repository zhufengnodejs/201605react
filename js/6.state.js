var Person = React.createClass({
    //定义初始状态
    getInitialState:function(){
        return {happy:true};
    },
    //指定默认属性
    getDefaultProps:function(){
        return {name:'匿名'}
    },
    //当点击按钮的时候可以改变状态，从而重新渲染界面
    handleClick:function(){
        //这种写法是绝对不允许的
        //this.state.happy = !this.state.happy;

        //当状态发生改变后会触发页面的重新渲染
        this.setState({happy:!this.state.happy});
    },
    render: function () {
        var heart = this.state.happy?'开心':'不开心';
        //注意 onClick绑定的是函数的定义而非执行结果
        return <p>
            {this.props.name}:{heart}<br/>
            <button onClick={this.handleClick} >改变心情</button>
        </p>
    }
});
ReactDOM.render(
    <Person name="张怡宁"/>,
    document.querySelector('#app')
);