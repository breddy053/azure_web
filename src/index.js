// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Replace with your main component
import Summerize from './Components/Summerize';
import ViewSection from './Components/ViewSection';

ReactDOM.render(
  <Router> {/* Wrap your entire app in BrowserRouter */}
    <Routes>
         {/* <Route path="/" element={<Home />} /> */}
         <Route path='/' element={<App/>}/>
         <Route path="/summerize" element={<Summerize/>} />
         <Route path='/viewsection' element={<ViewSection/>}/>
       </Routes>
  </Router>,
  document.getElementById('root')
);
