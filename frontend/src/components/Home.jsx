import React from "react";
import LeftSidebar from "./LeftSidebar";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";
import { Outlet } from "react-router-dom";
import useGetAllPost from "@/hooks/useGetAllPost";
import useGetSuggestedUsers from "@/hooks/useGetSuggestedUsers";

const Home = () => {
  useGetAllPost();
  useGetSuggestedUsers();

  return (
    <div className="flex h-screen">
      {/* Fixed Left Sidebar with hidden scrollbar */}
      <div className="hidden md:block w-64">
        <div className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 overflow-y-auto hide-scrollbar">
          <LeftSidebar />
        </div>
      </div>

      {/* Feed (hidden scrollbar) */}
      <div className="flex-grow ml-64 mr-80">
        <Feed />
        <Outlet />
      </div>

      {/* Fixed Right Sidebar with hidden scrollbar */}
      <div className="hidden lg:block w-80">
        <div className="fixed top-0 right-0 h-screen w-80 bg-white border-l border-gray-200 overflow-y-auto hide-scrollbar">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
