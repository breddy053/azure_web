//import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Summerize from "./Components/Summerize";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         {/* <div
//         className="header "
//         style={{
//           justifyContent: "space-between",
//         }}>
//         <div style={{ marginLeft: "-30px" }}>Automated meeting summerizer</div>
//         <div>
//           <img className="logo" src={logo3}></img>
//         </div>
//       </div> */}
//         <Header />
//         {/* <div className="content">
//         <UploadSection />
//       </div> */}
//       </div>
//       <Routes>
//         <Route path="/summerize" component={Summerize} />
//       </Routes>
//     </Router>
//   );
// };



const App =()=>{
  return (
    <div className="App">
      <Header/>
    </div>
  );
}
export default App;
