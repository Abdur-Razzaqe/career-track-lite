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

import MainLayout from "../components/layout/MainLayout";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/applications"
            element={
              <PrivateRoute>
                <Applications />
              </PrivateRoute>
            }
          />

          <Route
            path="/applications/new"
            element={
              <PrivateRoute>
                <AddApplication />
              </PrivateRoute>
            }
          />

          <Route
            path="/applications/:id"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />

          <Route
            path="/applications/edit/:id"
            element={
              <PrivateRoute>
                <EditApplication />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
