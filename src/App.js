import { Route,Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

const App = ()=> {
  return(
    <div>
      {/* <Profile /> */}
      <Routes>
        <Route path="/*" element={<Profile />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      
    </div>
  )
}

export default App;
