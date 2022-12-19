import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Weather App React</h1>
      <App />
      <div class="city" id="city-name"></div>

      <h5>React App By <a href="https://www.linkedin.com/in/nathalero/" target={'_blank'}> Nathalie Lesmes Rodriguez</a></h5>
      <h5>GitHub repository: <a href="https://github.com/nathalero/weather" target={'_blank'}>Weather React App</a></h5>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
