import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./Pages/Account";
import Swap from "./Pages/Swap";
import Calculator from "./Pages/Calculator";
import Analytics from "./Pages/Analytics";
import Docs from "./Pages/Docs";
import Home from "./Pages/Home";
import Base from "./Components/Layout/Base";
function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/account" element={<Account />} />
            <Route index path="/swap" element={<Swap />} />
            <Route index path="/calculator" element={<Calculator />} />
            <Route index path="/analytics" element={<Analytics />} />
            <Route index path="/docs" element={<Docs />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
