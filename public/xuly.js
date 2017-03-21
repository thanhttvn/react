function getName(name) {
    alert(name);
}

var Website = React.createClass({
    // a:function(){
    //   getName(this.props.ten);
    // },

    addStudent(){
        //Thay doi state cach 1
        //this.setState({tongso: parseInt(this.state.tongso) + 1});
        //Thay doi state cach 2
        this.state.tongso = parseInt(this.state.tongso) + 1;
        this.setState(this.state);
    },

    layThongTin: function () {
        alert("OK");
    },
    //Lay state- return cho 1 state.
    getInitialState(){
        return {tongso: this.props.tong};
    },

    render: function () {
        return (
            <div>
                < a href="google.com" className="mauvang"> {this.props.ten}-{this.props.top}</a>
                <p>{this.state.tongso}</p>
                <p>{this.props.children}</p>
                <button onClick={()=> {
                    getName(this.props.ten + this.props.top)
                }}>Show
                </button>
                <button onClick={this.addStudent}>Add</button>
            </div>
        );
    }
});

var Wap = React.createClass({
    render: function () {
        return (
            <div>
                < a href="abc.com" className="mauvang"> {this.props.ten} </a>
            </div>
        );
    }
});

var InputTag = React.createClass({
    show : function () {
        var text = this.refs.sl.value;
        alert(text);
    },
    render: function(){
        return(
            <div>
                <select ref="sl">
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>
                    <option value="c">CCC</option>
                </select>
                <input type="text" ref="txt" />
                <button onClick={this.show}>OK</button>
            </div>
        );
    }

});

ReactDOM.render(
    <div>
        <InputTag></InputTag>
        <Website ten="ReactJS" top="1" tong="40">Day la ReactJS</Website>
        <Website ten="NodeJS" top="2" tong="30">Day la NodeJS</Website>
    </div>
    , document.getElementById('root'));
