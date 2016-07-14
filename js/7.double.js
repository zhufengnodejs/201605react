var Input = React.createClass({
    //定义初始状态
    getInitialState:function(){
      return {value:'zfpx'};
    },
    //处理input元素值改变事件
    handleChange:function(event){
        var value = event.target.value;
        this.setState({value:value});
    },
    //如果提供了value 属性，则必须提供onChange属性，否则 此字段变成只读字段不能再编辑
    render:function(){
        return <div>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            <p>{this.state.value}</p>
        </div>
    }
});

ReactDOM.render(<Input/>,document.querySelector('#app'));