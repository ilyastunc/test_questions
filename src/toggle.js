import React from 'react';
import { createRoot } from 'react-dom/client';

function PlayerStatus() {
  const [status, setStatus] = React.useState("online");
  const [counter, setCounter] = React.useState(0);

  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === 'online' ? 'away': 'online'));
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    
    <div>
      <h1>{status}</h1>
      <h3>{counter}</h3>
      <button onClick={toggleStatus}>Toggle status</button>
    </div>
  );
};

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<PlayerStatus />);

setTimeout(() => {
  document.querySelector("button")?.click();
  setTimeout(() => console.log(document.getElementById("root").innerHTML), 100);
}, 300);

export default PlayerStatus;