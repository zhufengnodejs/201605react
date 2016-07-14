var Board = React.createClass({
    //定义初始状态
    getInitialState:function(){
        return {messages:["今天好热呀!"]};
    },
    handleClick:function(event){
        event.target.value = '';
    },
    addMsg:function(){
        //var message = this.refs.txtMsg.value;
        var message = document.querySelector('#txtMsg').value;
        var messages = this.state.messages;//先取出原来的数组
        messages.push(message);//向此数组中添加新的留言
        // setState是一个异步方法,如果要获取设置之后的最新的state值要在回调函数中获取
        this.setState({messages:messages},function(){
           // console.log(this.state.messages)
        });//设置状态
    },
    render:function(){
        return <div className="panel panel-success">
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-8">
                        <input type="text" defaultValue={this.props.msg} className="form-control" id="txtMsg" onClick={this.handleClick} />
                    </div>
                    <div className="col-xs-4">
                        <button onClick={this.addMsg} className="btn btn-primary">留言</button>
                    </div>
                </div>
            </div>
            <div className="panel-body">
                <ul className="list-group">
                    {
                        this.state.messages.map(function(item,index){
                            return <li className="list-group-item" key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
});

ReactDOM.render(
    <Board msg="请留言"/>,
    document.querySelector('#app')
)