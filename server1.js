const express=require('express');
const jwt=require('jsonwebtoken');
const secret="mysecretkey";
const app=express();
app.use(express.json());
app.post('/login',(req,res)=>{
    const token=jwt.sign({username:req.body.username},secret);
    res.json({token});
});
app.get('/profile',(req,res)=>{
    const token=req.headers.authorization;
    if(!token){
        res.sendStatus(401);
    }
    try{
        const user=jwt.verify(token,secret);
        res.json({message:'Access granted',user});
    }
    catch{
        res.sendStatus(403);
    }
});
app.listen(3000,()=>{
    console.log("server running on port 3000");
});