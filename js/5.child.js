
var Person = React.createClass({
    render:function(){
        return (<ul>
            {
              //把每个span映射成一个li
              React.Children.map(this.props.children,function(item,index){
                  return <li key={index}>{item}</li>
              })
             /* this.props.children.map(function(item,index){
                  return <li key={index}>{item}</li>
              })*/
            }
        </ul>)
    }
});

ReactDOM.render(
    <Person>
        <span>大儿子</span>
        <span>中儿子</span>
        <span>小儿子</span>
    </Person>,
    document.querySelector('#app')
);