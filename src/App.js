import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard.js";
import Header from "./pages/header/Header.js";
import Nomatch from "./pages/noMatch/Nomatch";
import Postauthor from "./pages/author/Postauthor.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/author" element={<Postauthor />}></Route>
        <Route path="*" element={<Nomatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
