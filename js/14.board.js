var Board = React.createClass({
    //定义初始状态
    getInitialState:function(){
        return {messages:["今天好热呀!"]};
    },
    render:function(){
        return <div className="panel panel-success">
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-8">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col-xs-4">
                        <button className="btn btn-primary">留言</button>
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
    <Board/>,
    document.querySelector('#app')
)