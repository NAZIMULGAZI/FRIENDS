// src/components/MobileBottomNav.jsx
import React from "react";
import { Home, Search, TrendingUp, MessageCircle, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { icon: <Home size={20} />, path: "/" },
  { icon: <Search size={20} />, path: "/search" },
  { icon: <TrendingUp size={20} />, path: "/explore" },
  { icon: <MessageCircle size={20} />, path: "/chat" },
  { icon: <Heart size={20} />, path: "/notifications" },
];

const MobileBottomNav = () => {
  const navigate = useNavigate();

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
