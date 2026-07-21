import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-64px)] bg-base-200">
        <div className="max-w-7xl mx-auto p-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
