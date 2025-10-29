import jwt from 'jsonwebtoken'

export const authenticateToken=async(req,res,next)=>{
    
    const authHeader = req.headers.authorization;

    if (!authHeader) {
    return res.status(401).json({ message: "No token found", ok: false });
    }

    const token = authHeader.split(' ')[1]; 

    try {
        const decoded = jwt.verify(token, process.env.secret_key);
        req.user = { id: decoded.id }; 

        next();
    } catch (error) {
  console.error(error);
  res.status(403).json({ message: "Invalid token", error });
}

}