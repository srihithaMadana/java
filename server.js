const express=require('express');
const app=express();
app.use(express.json());
let students=[
    {"id":1,"name":"sonu"},
    {"id":2,"name":"anu"}
];
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send("students added");
});
app.get('/students',(req,res)=>{
    res.json(students);
});
app.put('/students/:id',(req,res)=>{
    let id=req.params.id;
    let student=students.find(s=>s.id==id);
    if(student){
        student.name=req.body.name;
        res.send("students updated");
    }
    else{
        res.send("studenT NOT FOUND");
    }

});
app.delete('/students/:id',(req,res)=>{
    let id=req.params.id;
     student=students.find(s=>s.id!=id);
        res.send("students deleted");
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
