import { BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
// import Edit from "./pages/Edit.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage/>}/>
                {/*<Route path="/edit" element={<Edit/>}/>*/}
            </Routes>
        </BrowserRouter>
    )
}

export default App;