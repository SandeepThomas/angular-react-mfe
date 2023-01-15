import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <p>Hello from nx react app</p>
  );
}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define('react-element', Mfe4Element);


export default App;
