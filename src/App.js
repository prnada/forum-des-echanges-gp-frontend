import { BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Categories from "./Pages/Categories";
import Login from './components/Login';
import Register from './components/Register';
import Success from './components/Success';
import Posts from './Pages/Posts'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/profile" Component={Profile} />
          <Route path="/categories" Component={Categories} />
          <Route path="/login" Component={Login} />
          <Route path="/Register" Component={Register} />
          <Route path="/Success" Component={Success} />
          <Route path="/Posts" Component={Posts} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
