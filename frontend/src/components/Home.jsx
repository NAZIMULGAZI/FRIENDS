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
     
      <div className="hidden md:block w-64">
        <LeftSidebar />
      </div>

     
      <div className="flex-grow overflow-y-auto">
        <Feed />
        <Outlet />
      </div>

      <div className="hidden lg:block w-80">
        <div className="fixed right-0 top-0 h-screen w-80 border-l border-gray-200 bg-white overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
