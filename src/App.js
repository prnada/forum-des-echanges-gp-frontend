import { BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Categories from "./Pages/Categories";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/profile" Component={Profile} />
          <Route path="/categories" Component={Categories} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
