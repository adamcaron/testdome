/* Write a TodoList component that expects an items prop, and a list of objects, each with text and done properties.

TodoList also accepts an onItemClick function prop, which should be called when a user clicks an item in the list, if the item is not marked as done. Otherwise, the onItemClick should not be called and the click event itself should not be propagated further. The function should be called with the item object from the items list as the first parameter and the event as the second parameter.

HTML5, CSS3, React v16 (available as React and ReactDOM) */

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onListClick } = this.props;
    return (<ul onClick={onListClick}>
      {items.map((item, index) => <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }

  handleItemClick(item, event) {
    const { onItemClick } = this.props
		if (item.done === false) {
    	onItemClick(item, event)
    } else {
    	event.stopPropagation()
    }
  }
}


const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App items={items}/>, rootElement);