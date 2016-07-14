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
    //指定渲染方法
    render:function(){
        console.log('4. 渲染到界面上','render');
        return <div>
            计数:{this.state.count}<br/>
            <button onClick={this.handleClick}>更新</button>
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

ReactDOM.render(<Message count={1}></Message>,
document.querySelector('#app'));