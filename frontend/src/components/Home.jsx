// import React from 'react'
// import Feed from './Feed'
// import { Outlet } from 'react-router-dom'
// import RightSidebar from './RightSidebar'
// import useGetAllPost from '@/hooks/useGetAllPost'
// import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers'

// const Home = () => {
//     useGetAllPost();
//     useGetSuggestedUsers();
//     return (
//         <div className='flex h-screenw-full'>
//             <div className='flex-grow overflow-y-auto'>
//                 <Feed />
//                 <Outlet />
//             </div>
//             <RightSidebar />
//         </div>
//     )
// }

// export default Home

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
      <div className="w-64 overflow-y-auto flex-shrink-0 bg-white border-r border-gray-200">
        <LeftSidebar />
      </div>
      <div className="flex-grow overflow-y-auto bg-gray-50">
        <Feed />
        <Outlet />
      </div>
      <div className="w-80 overflow-y-auto flex-shrink-0 bg-white border-l border-gray-200">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
