import React from 'react';
import './App.css';
import Header from './components/Header';
import GradesList from './components/GradesList';
import AddGrade from './components/AddGrade';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
          <Header />
          <GradesList />
          <AddGrade />
      </div>
    </GlobalProvider>
  );
}

export default App;
