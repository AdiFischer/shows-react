import { useState } from 'react';

import './App.css';
import Header from './components/Header';

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <div className='App'>
      <Header />
     

    </div>
  );
}

export default App;
