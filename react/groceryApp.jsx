/* You have a GroceryApp class, which receives a list of products, each one with name and votes. The app should render an unordered list, with a list item for each product. Products can be upvoted or downvoted.

By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.

For example, passing the following array as products prop to GroceryApp [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }] and clicking the '+' button next to the Oranges should result in HTML like:

<div id="root">
  <ul>
    <li>
      <span>Oranges</span> - <span>votes: 1</span><button>+</button> <button>-</button>
    </li>
    <li>
      <span>Bananas</span> - <span>votes: 0</span><button>+</button> <button>-</button>
    </li>
  </ul>
</div>

HTML5, CSS3, React v16 (available as React and ReactDOM) */

const Product = props => {
  const plus = () => {
    props.onVote('up', props.idx)
  };
  const minus = () => {
    props.onVote('down', props.idx)
  };
  return (
    <li>
      <span>{props.name}</span> - <span>votes: {props.votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

class GroceryApp extends React.Component {

	constructor (props) {
    super(props)
    this.state = { products: props.products }
  }

  onVote = (dir, index) => {
    this.setState(prevState => {
      const products = prevState.products.map((product, i) => {
        if (i === index) {
          product.votes = dir === 'up' ? product.votes += 1 : product.votes -= 1
        }
        return product
      })
      return { products }
    })
  };

  render() {
    return (
      <ul>
        {/* Render an array of products, which should call this.onVote when + or - is clicked */}
        {this.props.products.map((p, idx) => (
          <Product
            name={p.name}
            votes={p.votes}
            key={p.name}
            idx={idx}
            onVote={(dir, idx) => this.onVote(dir, idx)}
           />
          )
         )
        }
      </ul>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>, document.getElementById('root'));
console.log(document.getElementById('root').innerHTML)
