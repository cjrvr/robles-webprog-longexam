import {
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./pages/LandingPages/HomePage";
import AboutPage from "./pages/LandingPages/AboutPage";
import ProductListPage from "./pages/LandingPages/ProductListPage";
import ProductPage from "./pages/LandingPages/ProductPage";

import SignInPage from "./pages/AuthPages/SignInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";

import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:name" element={<ProductPage />} />
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;