import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <p>Hello from craco react app</p>;
}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(<App />);
  }
}

customElements.define('craco-element', Mfe4Element);

export default App;
