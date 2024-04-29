// App.js
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// ============================================ LANDINGPAGE ITEMS START ============================================
import Home from "./pages/home/Home";
import About from "./pages/About/Index";
import Order from "./components/LandingPage/Order/Order.jsx";
import Pricing from "./pages/Pricing/Index";
import LandingLayout from "./Layouts/LandingLayout";
import Getsupport from "./pages/Support/index";

// ============================================ LANDINGPAGE ITEMS END ============================================
// ============================================ AdminLayout ITEMS START ============================================

import Admin from "./components/AdminDashboard/indexAdmin.jsx";
// ============================================ AdminLayout ITEMS END ============================================
// ============================================ ClientLayout ITEMS START ============================================

import ClientLayout from "./Layouts/ClientLayout";
// ============================================ ClientLayout ITEMS START ============================================

import NotFound from "./components/NotFound.jsx";
import Login from "./components/auth/Login/Login";
import Signup from "./components/auth/Signup/Signup";
import { AuthProvider } from "./routers/AuthContext";
import PrivateRoute from "./routers/PrivateRoute";
import PacmanLoader from "react-spinners/PacmanLoader.js";

// import Ado from "./components/AdminDashboard/indexAdmin.jsx";
const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "red",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      <AuthProvider>
        {loading ? (
          <PacmanLoader
            color={"#48AFCB"}
            loading={loading}
            size={150}
            cssOverride={override}
          />
        ) : (
          <Routes>
            {/* Landing Page Items */}
            <Route path='Login' element={<Login />} />
            <Route path='Signup' element={<Signup />} />
            {/* Landing Page Routes */}
            <Route path='/' element={<LandingLayout />}>
              <Route index element={<Home />} /> {/* Home for root path */}
              <Route path='about' element={<About />} />
              <Route path='Order' element={<Order />} />
              <Route path='Pricing' element={<Pricing />} />
              <Route path='Getsupport' element={<Getsupport />} />
            </Route>

            {/* Admin Dashboard Route */}
            <Route>
              <Route path='Admin' element={<Admin />} />
              {/* Omit the inner Route for default path within PrivateRoute */}
            </Route>

            {/* Client Dashboard Route */}
            <Route
              path='/client'
              element={
                <PrivateRoute>
                  <ClientLayout />
                </PrivateRoute>
              }>
              {/* Omit the inner Route for default path within PrivateRoute */}
            </Route>
            {/* Other Layout  Items */}

            <Route path='*' element={<NotFound />} />
          </Routes>
        )}
      </AuthProvider>
    </>
  );
};
export default App;
