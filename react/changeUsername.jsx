// This application should allow the user to update their username by inputting a custom value and clicking the button.

// The Username component is finished and should not be changed, but the App component is missing parts. Finish the App component so that the Username component displays the inputted text when the button is clicked.

// The App component should use the React.useRef Hook to pass the input to the Username component for the input element and for the Username component.

// For example, if the user inputs a new username of "John Doe" and clicks the button, the div element with id root should look like this:

// <div><button>Change Username</button><input type="text"><h1>John Doe</h1></div>
// HTML5, CSS3, React v16 (available as React and ReactDOM)

class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

function App() {
  const usernameElement = React.createRef()
  const inputElement = React.createRef()

  function clickHandler() {
    const val = inputElement.current.value
    usernameElement.current.changeValue(val)
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" ref={inputElement} />
      <Username ref={usernameElement} />
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
