import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Users from "../Users/Users";

const AllRoutes = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes;