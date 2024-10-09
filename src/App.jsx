import React from "react";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/layout/Sidbar";
import Page1 from "./pages/page-1/page-1";
import Page2 from "./pages/page-2/page-2";
import Page3 from "./pages/page-3/page-3";
import Header from "./components/layout/Header";

const App = () => {
    const location = useLocation();

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />

            <div style={{ flex: 1 }}>
                {location.pathname !== "/page3" && <Header />}
                
                <Routes>
                    <Route path="/" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                </Routes>
                
            </div>
        </div>
    );
};

const AppWithRouter = () => (
    <Router>
        <App />
    </Router>
);

export default AppWithRouter;
