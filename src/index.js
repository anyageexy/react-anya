import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { renderIntoDocument } from 'react-dom/test-utils';


// часы
// function clock(){
//   const element = (
//     <div>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   root.render(element);
// }
const root = ReactDOM.createRoot(document.getElementById('root'));


function Clock(props){
  return(
    <h2>It is {props.date.toLocaleTimeString()}</h2>
  )
}

function tick(){
  root.render(<Clock date = {new Date()} />);
}

setInterval(tick, 1000); 


// function Hi(props) {
//   return <h1>Hi, {props.name}</h1>;
// }
// function Goodbye(props) {
//   return <h1>Bye, {props.name}</h1>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// function App() {
//   return (
//     <div>
//       <Hi name="Man" />
//       <Goodbye name="Man" /></div>
//   )
// }
// root.render(<App />);



// reportWebVitals();
