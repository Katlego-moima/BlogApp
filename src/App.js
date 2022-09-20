import TopBar from "./components/topBar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
// import Sidebar from "../src/components/sidebar/Sidebar";
import Settings from "./pages/settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register/*" element={<Register />} />
          <Route path="login/*" element={<Login />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="write/*" element={<Write />} />
          <Route path="post/:postId/*" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
