// src/components/MobileBottomNav.jsx
import React from "react";
import {
  Heart,
  Home,
  LogOut,
  MessageCircle,
  PlusSquare,
  Search,
  TrendingUp,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";
 
const MobileBottomNav = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);

const navItems = [
  { icon: <Home size={20} />, path: "/" },
  { icon: <Search size={20} />, path: "/search" },
  { icon: <TrendingUp size={20} />, path: "/explore" },
  { icon: <MessageCircle size={20} />, path: "/chat" },
  { icon: <Heart size={20} />, path: "/notifications" },
  { icon: <PlusSquare size={20} />, text: "Create" },
    {
      icon: (
        <Avatar className="w-6 h-6" size={20}>
          <AvatarImage src={user?.profilePicture} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
      text: "Profile",
    },
    { icon: <LogOut  size={20}/>, text: "Logout" },
];

 

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 flex justify-around bg-white shadow-md md:hidden py-2 border-t">
      {navItems.map((item, idx) => (
        <button
          key={idx}
          onClick={() => navigate(item.path)}
          className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default MobileBottomNav;
