import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import { About } from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Services from "./components/pages/Services";
import Blogs from "./components/pages/Blogs";
import WorkshopAndTraining from "./components/pages/WorkshopAndTraining";
import LoginPage from "./components/pages/UserAuth/LoginPage";
import AdminPanel from "./components/pages/UserAuth/AdminPanel";
import AdminNavbar from "./components/layout/AdminNavbar";
import ForgetPassword from "./components/pages/UserAuth/ForgetPassword";
import ResetPassword from "./components/pages/UserAuth/ResetPassword";

function useLogAdminPath(setAdmin, setLogin,setForgetPassword) {
    const location = useLocation();

    React.useEffect(() => {
        setAdmin(location.pathname === "/admin");
        setLogin(location.pathname === "/login");
        setForgetPassword(location.pathname === "/forgetpassword");
        // setResetPassword(location.pathname === "/reset_password/:id/:token");
        
    }, [location]);
}

function LogAdminPath({ setAdmin, setLogin ,setForgetPassword}) {
    useLogAdminPath(setAdmin, setLogin,setForgetPassword);
    return null;
}



function App() {
    const [admin, setAdmin] = useState(false);
    const [login, setLogin] = useState(false);
    const [forgetPassword, setForgetPassword] = useState(false);
    // const [resetPassword, setResetPassword] = useState(false);

    return (
        <Router>
            <div className="bg-white w-full h-auto">
                <LogAdminPath 
                    setAdmin={setAdmin} 
                    setLogin={setLogin}  
                    setForgetPassword={setForgetPassword}
                    // setResetPassword={setResetPassword} 
                />
                {admin ? <AdminNavbar /> : (login || forgetPassword ) ? null : <Header />}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/admin" element={<AdminPanel />} />
                        <Route path="/workshop" element={<WorkshopAndTraining />} />
                        <Route path="/forgetpassword" element={<ForgetPassword />} />
                        {/* <Route path="/reset_password/:id/:token" element={<ResetPassword />} /> */}
                        <Route path="/reset_password/:id/:token" element={<ResetPassword />}></Route>
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </main>
                {admin || forgetPassword ? null : login ? null : <Footer />}
            </div>
        </Router>
    );
}


export default App;
