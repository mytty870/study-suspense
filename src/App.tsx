import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Child1 } from './components/Child1';
// import { Child2 } from './components/Child2';

const Child1 = lazy(() => import("./components/Child1"))
const Child2 = lazy(() => import('./components/Child2'))

function App() {
  return (
    <>
    <Suspense fallback={<div>loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Child1 />}/>
        <Route path='child2' element={<Child2 />}/>
      </Routes>
    </BrowserRouter>
    </Suspense>
    </>
  );
}

export default App;
