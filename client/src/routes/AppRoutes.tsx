import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Applications from "../pages/Applications/Applications";
import AddApplication from "../pages/AddApplication/AddApplication";
import EditApplication from "../pages/EditApplication/EditApplication";
import Details from "../pages/Details/Details";
import NotFound from "../pages/NotFound/NotFound";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= Public Layout ================= */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* ================= Auth ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= Dashboard Layout ================= */}
        <Route
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/applications" element={<Applications />} />

          <Route path="/applications/new" element={<AddApplication />} />

          <Route path="/applications/edit/:id" element={<EditApplication />} />

          <Route path="/applications/:id" element={<Details />} />
        </Route>

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
