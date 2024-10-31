import React from 'react';
// import Greet from './components/Greet';
// import Status from './components/Status';
// import Heading from './components/Heading';
import Button from './components/Button';

function App() {
  
  return (
    <div>
      {/* <Greet name="Kartik" num={10} /> */}
      {/* <Status status="Loading" /> */}
      {/* <Heading>Heading is here....</Heading> */}
      <Button handleClick={(event) => {
        console.log("Handle Click function")
      }} />
    </div>
  );
}

export default App;
