import Header from "./shared/components/partials/Header";
// import Footer from "./Footer"
import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./shared/components/layouts/RootLayout";
import ProductsLayout from "./shared/components/layouts/ProductsLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import CartPage from "./pages/Cart";
import ProductPage from "./pages/Product";
import NotFoundPage from "./pages/NotFound";
import AddProductPage from "./pages/AddProduct";
import ProductsPage from "./pages/Products";
import CheckoutPage from "./pages/Checkout";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route  path="about" element={<AboutPage />} />
        <Route  element={<ProductPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="cart" element={<CartPage />} />

        <Route path="/" element={<ProductsLayout />}>
          <Route  path="products/" element={<ProductsPage />} />
          <Route  path="products/:id" element={<ProductPage />} />
          <Route  path="checkout/" element={<CheckoutPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />  
    </Routes>
  );
};

export default App;
