import jwt from "jsonwebtoken";


const auth1 = (req, res, next) =>{
    const token = req.headers.authorization;
    try {
        jwt.verify(token, process.env.JWT_SECRET1)
        next();
    } catch (error) {
        res.json({success: false, message: "Invalid token"})
    }
}

export default auth1;


// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//     const token = req.headers.authorization;

//     if (!token) {
//         return res.status(401).json({ success: false, message: "Token missing" });
//     }

//     try {
//         jwt.verify(token, process.env.JWT_SECRET);
//         return next();
//     } catch (err1) {
//         try {
//             jwt.verify(token, process.env.JWT_SECRET1);
//             return next();
//         } catch (err2) {
//             return res.status(401).json({ success: false, message: "Invalid token" });
//         }
//     }
// };

// export default auth;


// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//     const token = req.headers.authorization;

//     if (!token) {
//         return res.status(401).json({ success: false, message: "Token missing" });
//     }

//     try {
//         // Attempt 1: Verify with JWT_SECRET
//         jwt.verify(token, process.env.JWT_SECRET);
//         return next();
//     } catch (err1) {
//         try {
//             // Attempt 2: Verify with JWT_SECRET1
//             jwt.verify(token, process.env.JWT_SECRET1);
//             return next();
//         } catch (err2) {
//             try {
//                 // Attempt 3: Verify with JWT_SECRET2
//                 jwt.verify(token, process.env.JWT_SECRET2);
//                 return next();
//             } catch (err3) {
//                 try {
//                     // Attempt 4: Verify with JWT_SECRET3
//                     jwt.verify(token, process.env.JWT_SECRET3);
//                     return next();
//                 } catch (err4) {
//                     // If all verifications fail
//                     return res.status(401).json({ success: false, message: "Invalid token" });
//                 }
//             }
//         }
//     }
// };

// export default auth;