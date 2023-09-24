import React, { Suspense } from 'react';
import './App.css';
import { DataLoader } from './components/DataLoader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-center">
          <h1 className="text-2xl">React App</h1>
          <Suspense fallback={<p>Loading...</p>}>
            <DataLoader />
          </Suspense>
        </div>
      </header>
    </div>
  );
}

export default App;
