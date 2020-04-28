class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showP: false};
    this.toggleShowP = this.toggleShowP.bind(this);
  }

  toggleShowP() {
    this.setState(state => ({
      showP: !state.showP
    }));
  }

  render() {
    return (<React.Fragment>
          <a href="#" onClick={this.toggleShowP}>Want to buy a new car?</a>
        {this.state.showP ? <p>Call +11 22 33 44 now!</p> : null}
        </React.Fragment>);
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);