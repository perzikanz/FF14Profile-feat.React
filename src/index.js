import React from 'react';
import ReactDOM, { render } from "react-dom";


function Button() {
  return(
    <button onClick={() => console.log("押されました")}>
      押してね
    </button>
  );
}



ReactDOM.render(
  <Button />,
  document.getElementById('root')
);