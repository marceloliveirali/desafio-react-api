import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/HomeBody";
import FindProfile from "./routes/FindProfile";
import GithubProfile from "./routes/GithubProfile";
import NotFound from "./routes/NotFound";

function App() 
{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} >
                        <Route index element={<Navigate to="/home" />} />
                        <Route path="home" element={<HomeBody />} />
                        <Route path="findProfile" element={<FindProfile />} />
                        <Route path="githubProfile" element={<GithubProfile />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;