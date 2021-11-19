import {BrowserRouter, Route, Routes} from "react-router-dom";
import {pageURL} from "./const/page";
import Auth from "./pages/Auth";
import GuardedRoot from "./components/GuardedRoot";
import "./app.scss"
import SignUp from "./pages/SignUp";
import Generate from "./pages/Generate";
import Templates from "./pages/Templates";
import Categories from "./pages/Categories";

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path={pageURL.auth} element={<Auth/>}/>
                <Route exact={true} path={pageURL.signUp} element={<SignUp/>}/>
                <Route
                    exact={true}
                    path={pageURL.generate}
                    element={<GuardedRoot element={<Generate/>}/>}
                />
                <Route
                    exact={true}
                    path={pageURL.templates}
                    element={<GuardedRoot element={<Templates/>}/>}
                />
                <Route
                    exact={true}
                    path={pageURL.categories}
                    element={<GuardedRoot element={<Categories/>}/>}
                />
                <Route path={""} element={<div>not cool</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;