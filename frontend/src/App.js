import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Causes from "./pages/causes/Causes";
import Give from "./pages/give/Give";
import Events from "./pages/Page/events/Events";
import Gallery from "./pages/Page/gallery/Gallery";
import Price from "./pages/Page/price/Price";
import Features from "./pages/causes/featured/Features";
import Services from "./pages/Page/services/Services";
import BlogDetails from "./pages/Blog/BlogDetails";
import EventDetail from "./pages/Page/events/EventDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/give" element={<Give />} />
            <Route path="/about" element={<About />} />
            <Route path="/cause" element={<Causes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pages/events" element={<Events />} />
            <Route path="/pages/gallery" element={<Gallery />} />
            <Route path="/pages/prices" element={<Price />} />
            <Route path="/pages/services" element={<Services />} />
            <Route path="/cause/features" element={<Features />} />
            <Route path="/blog/detail-page" element={<BlogDetails />} />
            <Route path="/events/grammar-books" element={<EventDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
