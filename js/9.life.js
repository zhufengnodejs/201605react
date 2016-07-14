var Message = React.createClass({
    getDefaultProps:function(){
        console.log('1. 获取默认属性','getDefaultProps');
        return {count:0};
    },
    getInitialState:function(){
        console.log('2. 获取初始状态','getInitialState');
        return {count:this.props.count};
    },
    componentWillMount:function(){
        console.log('3. 组件将要被渲染到界面上','componentWillMount');
    },
    //当点击按钮的时候，改变状态，累加1
    handleClick:function(){
        this.setState({count:this.state.count + 1});
    },
    //从指定的DOM节点上移除掉此组件
    killMyself:function(){
        ReactDOM.unmountComponentAtNode(document.querySelector('#app'));
    },
    componentWillUnmount:function(){
        console.log('10. 组件将要被移除','componentWillUnmount');
    },
    componentDidUnmount:function(){
        console.log('11. 组件移除完毕','componentDidUnmount');
    },
    //指定渲染方法
    render:function(){
        console.log('4. 渲染到界面上','render');
        return <div>
            计数:{this.state.count}<br/>
            <button onClick={this.handleClick}>更新</button><br/>
            <button onClick={this.killMyself}>移除</button>
            子组件 <SubMessage count={this.state.count}></SubMessage>
        </div>
    },
    componentDidMount:function(){
        console.log('5. 组件渲染完毕','componentDidMount');
    },
    //询问组件是否需要更新,返回true要更新 返回false不要更新
    //toProps新的属性 toState新的状态
    shouldComponentUpdate:function(toProps,toState){
        console.log('6. 询问组件是否需要更新','shouldComponentUpdate');
        if(toState.count <=10){
            return true;
        }else{
            return false;
        }
    },
    componentWillUpdate:function(){
        console.log('7. 组件将要得到更新','componentWillUpdate');
    },
    componentDidUpdate:function(){
        console.log('9. 组件更新完成','componentDidUpdate');
    }
});

var SubMessage = React.createClass({
    //组件得到新的更新后的属性值
    componentWillReceiveProps:function(){
        console.log('SubMessage ','componentWillReceiveProps');
    },
    //询问此组件是否需要更新
    shouldComponentUpdate:function(toProps,toState){
        console.log('SubMessage ','shouldComponentUpdate');
       if(toProps.count<=5){
           return true;
       }else{
           return false;
       }
    },
    render:function(){
        console.log('SubMessage ','render');
        return <div>{this.props.count}</div>
    }
});

ReactDOM.render(<Message count={1}></Message>,
document.querySelector('#app'));