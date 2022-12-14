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
  const user = true;
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register/" element={user ? <Home /> : <Register />} />
          <Route path="login/" element={user ? <Home /> : <Login />} />
          <Route
            path="settings/"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="write/" element={user ? <Write /> : <Register />} />
          <Route path="post/:postId/" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
