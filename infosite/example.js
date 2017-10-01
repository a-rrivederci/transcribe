var React = require('react'),
ReactIScroll = require('react-iscroll'),
iScroll = require('iscroll');

var ExampleApp = React.createClass({
getDefaultProps: function() {
return ({
  options: {
    mouseWheel: true,
    scrollbars: true
  }
})
},
onScrollStart: function() {
console.log("iScroll starts scrolling")
},
render: function() {
var i = 0, len = 1000, listOfLi = [];

for(i; i < len; i++) {
  listOfLi.push(<li key={i}>Row {i+1}</li>)
}

return (
    <div style={height: '100vh'}>
        <h1>Example of scrollable list</h1>
        <ReactIScroll iScroll={iScroll}
                    options={this.props.options}
                    onScrollStart={this.onScrollStart}>
        <ul>
            {listOfLi}
        </ul>
        </ReactIScroll>
    </div>
    )}
});