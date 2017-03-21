var ShowAnh = React.createClass(
    {
        nextBtn: function () {
            this.setState({img: parseInt(this.state.img)%4 + 1});
        },

        getInitialState(){
            return {img: 1};
        },

        componentDidMount(){
          setInterval(this.nextBtn,1000);
        },

        render: function () {
            return (
                <div>
                    <h1>Anh</h1>
                    <img src={"images/" + this.state.img + ".jpg"} height="420" width="420"/>
                    <button onClick={this.nextBtn}>Next</button>
                </div>
            );
        }
    }
);

ReactDOM.render(
    <ShowAnh />
    , document.getElementById('root')
);

