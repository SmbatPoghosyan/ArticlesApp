const jwt = require('jsonwebtoken');

module.exports = function permit(...permittedRoles){
    return (req, res, next) => {
        const token = req.headers["authorization"];
        if (token) {
            const user = jwt.verify(token, process.env.JWT_SECRET);
            req.user = user;
            if (user.role && permittedRoles.includes(user.role)) {
                next();
            } else {
                return res.status(401).json({message: "Unauthorized"});
            }
        } else {
            return res.status(401).json({message: "Unauthorized"});
        }
    }
}
