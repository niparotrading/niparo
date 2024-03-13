import * as React from "react";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/homePage";
import PortfolioPage from "./pages/portfolio/portfolioPage";
import ContactPage from "./pages/contact/contactPage";
import OpportunitiesPage from "./pages/opportunities/opportunitiesPage";
import AboutPage from "./pages/about/aboutPage";

export default function App() {

    const theme = createTheme({
        type: 'dark',
        theme: {
            colors: {
                white: '#ffffff',
                black: '#000000',
            }
        }
    })

    return (
        <NextUIProvider theme={theme}>
            <Header />
            <div className='container'>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/portfolio" element={<PortfolioPage />} />
                        <Route exact path="/opportunities" element={<OpportunitiesPage />} />
                        <Route exact path="/about" element={<AboutPage />} />
                        <Route exact path="/contact" element={<ContactPage />} />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </NextUIProvider>
    );
}