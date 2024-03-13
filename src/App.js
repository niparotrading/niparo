import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/homePage";
import PortfolioPage from "./pages/portfolio/portfolioPage";
import ContactPage from "./pages/contact/contactPage";

export default function App() {

    return (
        <NextUIProvider>
            <Header />
            <div className='container'>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/portfolio" element={<PortfolioPage />} />
                        <Route exact path="/contact" element={<ContactPage />} />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </NextUIProvider>
    );
}