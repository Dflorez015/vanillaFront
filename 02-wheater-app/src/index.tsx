// imports
import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux'
// app
import App from './App';
// style
import { GlobalStyle } from './styles';
// store
import { store } from './context';
// test
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);

reportWebVitals();
