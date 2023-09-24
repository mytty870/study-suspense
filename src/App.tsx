import React, { Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import { AlwaysSuspend } from './components/AlwaysSuspend';
import { SometimesSuspend } from './components/SometimesSuspend';
import { RenderingNotifier } from './components/RenderingNotifier';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-center">
          <h1 className="text-2xl">React App</h1>
          <RenderingNotifier name="outside"/>
          <Suspense fallback={<p>Loading...</p>}>
            <p>表示されるかな？</p>

            {/* <AlwaysSuspend /> */}
            <SometimesSuspend />
            <RenderingNotifier name="inside"/>
            <button type='button' className='border p-1' onClick={() => setCount(count + 1)}>add</button>
            <p>{count}</p>
          </Suspense>
          <p>ここは表示される</p>
        </div>
      </header>
    </div>
  );
}

export default App;
