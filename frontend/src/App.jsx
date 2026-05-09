import { BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import RunnerSignup from "@/pages/RunnerSignup.jsx";
import VolunteerSignup from "@/pages/VolunteerSignup.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/runnersignup" element={<RunnerSignup/>}/>
                <Route path="/volunteersignup" element={<VolunteerSignup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;