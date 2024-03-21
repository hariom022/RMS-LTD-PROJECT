import React from "react";
import "./App.scss";
import Sidebar from "./component/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Management from "./Pages/Management";
import MasterData from "./Pages/MasterData";
import InventoryUpdate from "./Pages/InventoryUpdate";
import NewRequest from "./Pages/NewRequest";
import Reports from "./Pages/Reports";
import Authentication from "./Pages/Authentication";
import Invoice from "./Pages/Invoice";
import GoodRecipts from "./Pages/GoodReceipts";
import LoginForms from "./Pages/LoginForms";
import SignUpForm from "./Pages/SignUpForm";

const App = () => {
  return (
    <div className="App">
      <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<Management/>}/>
          <Route path="/masterData" element={<MasterData/>}/>
          <Route path="/inventory" element={<InventoryUpdate/>} />
          <Route path="/newRequest" element={<NewRequest/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/auth" element={<Authentication/>}/>
          <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/goodRecipts" element={<GoodRecipts/>}/>
        <Route path="/login" element={<LoginForms/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
        </Routes>
        
      </Router>
    </div>
  );
};

export default App;
