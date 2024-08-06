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
import LoginPage from "./components/pages/LoginPage";
import AdminPanel from "./components/pages/AdminPanel";
import AdminNavbar from "./components/layout/AdminNavbar";

function useLogAdminPath(setAdmin, setLogin) {
    const location = useLocation();

    React.useEffect(() => {
        setAdmin(location.pathname === "/admin");
        setLogin(location.pathname === "/login");
    }, [location]);
}

function LogAdminPath({ setAdmin, setLogin }) {
    useLogAdminPath(setAdmin, setLogin);
    return null;
}

function App() {
    const [admin, setAdmin] = useState(false);
    const [login, setLogin] = useState(false);
    return (
        <Router>
            <div className="bg-white w-full h-auto">
                {admin ? <AdminNavbar /> : login ? null : <Header />}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/admin" element={<AdminPanel />} />
                        <Route
                            path="/workshop"
                            element={<WorkshopAndTraining />}
                        />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/show-blogs/:id" element={<LoginPage />} />
                    </Routes>
                </main>
                {admin ? null : login ? null : <Footer />}
                <LogAdminPath setAdmin={setAdmin} setLogin={setLogin} />
            </div>
        </Router>
    );
}

export default App;
