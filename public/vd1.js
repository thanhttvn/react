var Com = React.createClass({
    addState(){
        this.state.num = parseInt(this.state.num) + 1;
        this.setState(this.state);
    },

    getInitialState(){
        return {num: 0};
    },
    render: function () {
        return (
            <button onClick={this.addState}>Hello {this.state.num}</button>
        );
    }
});
ReactDOM.render(
    <Com/>
    , document.getElementById('root')
);