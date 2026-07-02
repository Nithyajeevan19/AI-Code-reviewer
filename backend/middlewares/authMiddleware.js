
import jwt from 'jsonwebtoken'

export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token found", ok: false });
    }

    const token = authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: "No token provided", ok: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.secret_key);
        req.user = { id: decoded.id, email: decoded.email }; 
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Token expired", ok: false });
        }
        return res.status(403).json({ message: "Invalid token", ok: false });
    }
};
