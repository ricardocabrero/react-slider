import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Slider} from './components/Slider'
import {Title} from './components/Title'

function App() {
  return (
    <div className="App">
      <Title children="React Simple Slider Carrusel"/>
      <Slider/>
    </div>
  );
}

export default App;
