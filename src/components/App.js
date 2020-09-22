import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import { calculate } from '../logic/calculate'
import '../App.css';

export default function App() {
  return (
    <div className="App">
      <Display />
      <ButtonPanel />
    </div>
  );
}
