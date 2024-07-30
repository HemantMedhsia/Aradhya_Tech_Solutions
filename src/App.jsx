import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import { About } from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Services from "./components/pages/Services";
import Blogs from "./components/pages/Blogs";
import WorkshopAndTraining from "./components/pages/WorkshopAndTraining";

function App() {
    return (
        <Router>
            <div className="bg-white w-full h-auto">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route
                            path="/workshop"
                            element={<WorkshopAndTraining />}
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
