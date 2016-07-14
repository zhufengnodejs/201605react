/**
 * 1. jquery
 * 2. 如何用ajax
 */

var Suggest = React.createClass({
    //设置初始状态
    getInitialState:function(){
        return {content:[]};
    },
    handleChange:function(event){
        var keyword = event.target.value;
        $.ajax({
            url:'https://www.baidu.com/su',
            type:'get',
            cache:false,//是否可以走缓存，如果不走缓存，加时间戳
            jsonp:'cb',//指定参数中指定接收函数名的参数名
            dataType:'jsonp',//指定响应结果的类型
            data:{wd:keyword},//指定参数 get请求中data会转换成查询字符串拼接在URL的后面
            context:this,//指定success方法中的this指针等于组件实例本身
            success:function(result){
                var words = result.s;//字符串数组
                words = words.map(function(word,index){
                    return <li key={index}>{word}</li>
                });//变万一个li组件的数组
                this.setState({content:words});
            }
        });

    },
    render:function(){
        return <div>
            <input type="text" onChange={this.handleChange} /><br/>
            <ul>
                {this.state.content}
            </ul>
        </div>
    }
});
ReactDOM.render(<Suggest></Suggest>,document.querySelector('#app'));
