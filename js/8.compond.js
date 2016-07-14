/**
 * 复合组件
 */

var Panel = React.createClass({
    render:function(){
        return <div className="panel panel-success">
                <PanelHead head={this.props.head}></PanelHead>
                <PanelBody body={this.props.body}></PanelBody>
                <PanelFooter footer={this.props.footer}></PanelFooter>
        </div>
    }
});

var PanelHead = React.createClass({
    render:function(){
        return <div className="panel-heading">
                    {this.props.head}
               </div>
    }
});

var PanelBody = React.createClass({
    render:function(){
        return <div className="panel-body">
            {this.props.body}
        </div>
    }
});

var PanelFooter = React.createClass({
    render:function(){
        return <div className="panel-footer">
            {this.props.footer}
        </div>
    }
});
//单向数据流 数据以属性的方式从上而下依次传递
ReactDOM.render(
    <Panel head="头" body="体" footer="尾">

</Panel>,document.querySelector('#app'));