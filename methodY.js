const express = require ('express');
const app = express();
app.use(express.json());
app.listen(3000);

let users={};
app.get('/users',(req,res)=>{
    res.send(users);
})
app.post('/users',(req,res)=>{
    console.log(req.body);
    users=req.body;   
    res.json({
              msg:"post is updated",
              users:req.body
             }); 
    
}); 

app.patch('/users',(req,res)=>{

    console.log(req.body);
   let data=req.body;
   for(key in data){

    users[key] = data[key];
   }

    res.json({
        msg:"data is edited successfully" 
         })
}) 
app.delete('/users',(req,res)=>{
    res.json({
        "msg":"data deleted successfully"
    })
})