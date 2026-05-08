import { BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import LoginManager from "./components/LoginManager.jsx";
import Signup from "./pages/Signup.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/loginmanager" element={<LoginManager/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;