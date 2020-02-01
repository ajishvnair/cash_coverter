import React from 'react';
import AppRouter from './router/AppRouter';
import 'antd/dist/antd.css';
import './style/app.css'
import '@shopify/polaris/styles.css';
import 'es6-shim';

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
