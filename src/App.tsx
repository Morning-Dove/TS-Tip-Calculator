import React from 'react';
import './App.css';
import Calculator from "./Calculator";

const App: React.FC = () => {
  return (
    <>
      <header>
        <h1>Tip Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
      <footer>
        <p>Created By: Morning Dove Nelson 2024</p>
      </footer>
    </>
  );
}

export default App;
