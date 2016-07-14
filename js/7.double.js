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
    render:function(){
        return <div>
            <input type="text" onChange={this.handleChange}/>
            <p>{this.state.value}</p>
        </div>
    }
});

ReactDOM.render(<Input/>,document.querySelector('#app'));