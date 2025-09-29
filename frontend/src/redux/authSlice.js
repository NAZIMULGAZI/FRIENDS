// import {createSlice} from "@reduxjs/toolkit"

// const authSlice = createSlice({
//     name:"auth",
//     initialState:{
//         user:null,
//         suggestedUsers:[],
//         userProfile:null,
//         selectedUser:null,
//     },
//     reducers:{
//         // actions
//         setAuthUser:(state,action) => {
//             state.user = action.payload;
//         },
//         setSuggestedUsers:(state,action) => {
//             state.suggestedUsers = action.payload;
//         },
//         setUserProfile:(state,action) => {
//             state.userProfile = action.payload;
//         },
//         setSelectedUser:(state,action) => {
//             state.selectedUser = action.payload;
//         },
// //         setUser: (state, action) => {
// //   state.user = action.payload; // ← Make sure action.payload includes bio
// // },

//     }
// });
// export const {
//     setAuthUser, 
//     setSuggestedUsers, 
//     setUserProfile,
//     setSelectedUser,
//     setUser,
// } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,  // persist user
    token: localStorage.getItem("token") || null,            // persist token
    suggestedUsers: [],
    userProfile: null,
    selectedUser: null,
  },
  reducers: {
    // 🔑 Save logged in user + token
    setAuthUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;

      // persist in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },

    // 🔑 Clear on logout
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.suggestedUsers = [];
      state.userProfile = null;
      state.selectedUser = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },

    setSuggestedUsers: (state, action) => {
      state.suggestedUsers = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  setAuthUser,
  logoutUser,
  setSuggestedUsers,
  setUserProfile,
  setSelectedUser,
} = authSlice.actions;

export default authSlice.reducer;
