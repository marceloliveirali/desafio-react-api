import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import FindProfile from "./routes/Home/FindProfile";
import GithubProfile from "./routes/Home/FindProfile/GithubProfile";
import NotFound from "./routes/Home/NotFound";

function App() 
{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} >
                        <Route index element={<Navigate to="/home" />} />
                        <Route path="home" element={<HomeBody />} />
                        <Route path="findProfile" element={<FindProfile />} >
                            <Route path="githubProfile" element={<GithubProfile />} /> 
                            <Route path="notFound" element={<NotFound />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}   

export default App;