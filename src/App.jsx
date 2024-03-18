import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GetApi from "./components/GetApi";
import PostApi from "./components/PostApi";
import UserDetail from "./components/UserDetail";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GetAPI" element={<GetApi />} />
        <Route path="/GetAPI/:id" element={<UserDetail />} />
        <Route path="/PostAPI" element={<PostApi />} />
      </Routes>
    </div>
  );
}

export default App;
