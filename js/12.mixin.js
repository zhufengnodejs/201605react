//可以把许多组件中的公用逻辑抽取出来放在一个mixin中
var mix = {
    getInitialState:function(){
        return {count:3};
    },
    handleClick:function(){
        this.setState({count:this.state.count+1});
    },
}
var Counter1 = React.createClass({
    mixins:[mix],//在此引用mixin
    render:function(){
        return <div>
            计数器1:{this.state.count}
            <button onClick={this.handleClick}>增加</button>
        </div>
    }
});
var Counter2 = React.createClass({
    mixins:[mix],
    render:function(){
        return <div>
            计数器2:{this.state.count}
            <button onClick={this.handleClick}>增加</button>
        </div>
    }
});
ReactDOM.render(<div>
    <Counter1></Counter1>
    <Counter2></Counter2>
</div>,document.querySelector('#app'));