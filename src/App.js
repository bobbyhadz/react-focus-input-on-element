import './App.css';

import {useRef} from 'react';

const App = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <div>
      <input ref={ref} id="message" name="message" />

      <hr />

      <button onClick={handleClick}>Focus input</button>
    </div>
  );
};

export default App;
