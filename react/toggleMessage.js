class Message extends React.Component {
  render() {
    return (<React.Fragment>
          <a href="#">Want to buy a new car?</a>
          <p>Call +11 22 33 44 now!</p>
        </React.Fragment>);
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);