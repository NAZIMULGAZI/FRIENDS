import React from "react";
import LeftSidebar from "./LeftSidebar";
import MobileBottomNav from "./MobileBottomNav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <LeftSidebar />
      <main className="md:ml-64 mb-16 md:mb-0 px-4 py-6">
        <Outlet />
      </main>
      <MobileBottomNav />
    </div>
  );
};

export default MainLayout