import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home.Component';
import Student from './Component/Student/Student.Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home/>
        <Student/>
      </header>
    </div>
  );
}

export default App;
