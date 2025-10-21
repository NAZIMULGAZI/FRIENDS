 

import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    // Token can come from cookie or Authorization header
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.id = decoded.userId; // attach userId to request
    next();
  } catch (error) {
    // Handle expired or invalid token error
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired. Please login again.",
        success: false,
      });
    }

    return res.status(401).json({
      message: "Invalid or missing token",
      success: false,
    });
  }
};

export default isAuthenticated;


// import jwt from "jsonwebtoken";
// const isAuthenticated = async (req,res,next)=>{
//     try {
//         const token = req.cookies.token;
//         if(!token){
//             return res.status(401).json({
//                 message:'User not authenticated',
//                 success:false
//             });
//         }
//         const decode = await jwt.verify(token, process.env.SECRET_KEY);
//         if(!decode){
//             return res.status(401).json({
//                 message:'Invalid',
//                 success:false
//             });
//         }
//         req.id = decode.userId;
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default isAuthenticated;