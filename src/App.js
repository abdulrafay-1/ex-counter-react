import './App.css';
import { useState } from 'react';

function App() {
  const [counter, SetCounter] = useState(0);
  let color = counter == 0 ? '#000' : counter > 0 ? 'green' : 'red';

  return (
    <main className='main'>
      <h1>Counter App</h1>
      <div className='counter-con'>
        <button className='minus-btn' onClick={() => SetCounter(counter - 1)}>-</button>
        <div className='counter' style={{ color: color }}>{counter}</div>
        <button className='plus-btn' onClick={() => SetCounter(counter + 1)}>+</button>
      </div>
    </main>
  );
}

export default App;
