import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Button } from 'element-react';

import 'element-theme-default';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
class Square extends React.Component {
  render() {
    return (
      <div>
        <ShoppingList name="Markxx" />
        <Button type="success" onClick={() => console.log("点击按钮")}>Hello111</Button>
        <Button type="success" onClick={() => console.log("点击按钮")}>Hello222</Button>
      </div>

    );
  }
}
ReactDOM.render(<Square />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
