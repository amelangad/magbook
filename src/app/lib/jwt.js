import jwt from "jsonwebtoken"

export function generateToken(username){
    const secret = process.env.SECRET_KEY;
    const token = jwt.sign(username, secret, {expiresIn: '1h'});
    return token;
}

export function verifyJwt(token){
    try{
        const secret = process.env.SECRET_KEY;
        const decoded = jwt.verify(token, secret);
        return decoded;
    }
    catch (err){
console.log(err);
return null;
    }
}