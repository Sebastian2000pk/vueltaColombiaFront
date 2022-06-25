import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";

// Pages
import CiclistsPage from "./pages/ciclists/CiclistsPage";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Navigation />
        <div className="container-content">
          <Routes>
            <Route path="/" element={<CiclistsPage />}></Route>
            <Route path="/ciclists" element={<CiclistsPage />}></Route>
          </Routes>
        </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
