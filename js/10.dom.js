var Input = React.createClass({
    handleClick: function (event) {
        //refs包含所有的有ref属性的子组件
        var inputFocus = this.refs.inputFocus;
        //得到对应的DOM元素
        inputFocus.focus();
        inputFocus.value = 99;
    },
    render: function () {
        return <div>
            <input type="text" ref="inputFocus"/>
            <button ref="buttonFocus" onClick={this.handleClick}>得到焦点</button>
        </div>
    }
});

ReactDOM.render(<Input/>,document.querySelector('#app'));