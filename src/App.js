import Home from "./pages/home/Home";
import Clients from "./pages/clients/Clients";
import Loans from "./pages/loans/Loans";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Payments from "./pages/payments/Payments";
import Reports from "./pages/reports/Reports";
import SingleClient from "./pages/single-client/Single-client";
import "./style/dark.scss"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { clientInputs, loanInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark":"app"}>
      <BrowserRouter>
        <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="clients">  
            <Route index element={<Clients />} />
            <Route path=":userId" element={<SingleClient />} />
            <Route path="new" element={<New inputs={clientInputs} title="Add New User" />} />
          </Route>

          <Route path ="loans">
          <Route index element={<Clients />} />
          <Route path="new" element={<Loans inputs={loanInputs} title="Create New Loans"/>} />
          </Route>

          <Route path="payments" element={<Payments />} />
          <Route path="reports" element={<Reports />} /> 
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
