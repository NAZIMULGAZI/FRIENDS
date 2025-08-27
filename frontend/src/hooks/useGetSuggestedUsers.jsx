// import { setSuggestedUsers } from "@/redux/authSlice";
// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";


// const useGetSuggestedUsers = () => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         const fetchSuggestedUsers = async () => {
//             try {
//                 const res = await axios.get('https://friends-l46d.onrender.com/api/v1/user/suggested', { withCredentials: true });
//                 if (res.data.success) { 
//                     dispatch(setSuggestedUsers(res.data.users));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchSuggestedUsers();
//     }, []);
// };
// export default useGetSuggestedUsers;

import { setSuggestedUsers } from "@/redux/authSlice";
import axios from "axios";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

const useGetSuggestedUsers = () => {
    const dispatch = useDispatch();
    // const token = localStorage.getItem("token");

    const fetchSuggestedUsers = useCallback(async () => {
        try {
            const res = await axios.get("https://friends-13.onrender.com/api/v1/user/suggested", {
//   headers: {
//     Authorization: `Bearer ${token}`, // 👈 send token
//   },
                withCredentials: true }
            );
            if (res.data && res.data.success) {
                dispatch(setSuggestedUsers(res.data.users));
            }
        } catch (error) {
            console.error("Failed to fetch suggested users:", error);
        }
    }, [dispatch]);

    useEffect(() => {
        fetchSuggestedUsers();
    }, [fetchSuggestedUsers]);
};

export default useGetSuggestedUsers;