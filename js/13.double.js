var Input = React.createClass({
    //引用mixin
    mixins:[React.addons.LinkedStateMixin],
    //定义初始状态
    getInitialState:function(){
      return {value:'zfpx'};
    },
    //如果提供了value 属性，则必须提供onChange属性，否则 此字段变成只读字段不能再编辑
    render:function(){
        return <div>
            <input type="text" valueLink={this.linkState('value')} />
            <p>{this.state.value}</p>
        </div>
    }
});

ReactDOM.render(<Input/>,document.querySelector('#app'));