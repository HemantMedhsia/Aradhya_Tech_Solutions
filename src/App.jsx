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

function useLogAdminPath(setAdmin) {
    const location = useLocation();

    React.useEffect(() => {
        setAdmin(location.pathname === "/admin");
    }, [location, setAdmin]);
}

function LogAdminPath({ setAdmin }) {
    useLogAdminPath(setAdmin);
    return null;
}

function App() {
    const [admin, setAdmin] = useState(false);

    return (
        <Router>
            <div className="bg-white w-full h-auto">
                {admin ? <AdminNavbar /> : <Header />}
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
                    </Routes>
                </main>
                <Footer />
                <LogAdminPath setAdmin={setAdmin} />
            </div>
        </Router>
    );
}

export default App;
