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
import PostPage from './Pages/PostPage'
import OtherProfile from './Pages/OtherProfile';
import AddCategory from './components/AddCategory';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/profile" Component={Profile} />

          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/Success" Component={Success} />
          <Route path="/Posts" Component={Posts} />
          <Route path="/Post" Component={PostPage} />
          <Route path="/OtherProfile" Component={OtherProfile} />
          <Route path="/categories" Component={Categories} />
          <Route path="/new-category" Component={AddCategory} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
