const express =require('express');
const app = express();
app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile('C:/Users/Deadpool/Desktop/node/vievY/indexY.html');
});


app.get('/about',(req,res)=>{
    res.sendFile('./vievY/aboutY.html',{root:__dirname});
});

// redirect
app.get('/about-us',(req,res)=>{ 
    res.redirect('/about');                                     
});

app.use((req,res)=>{
    res.sendFile('./vievY/404Y.html',{root:__dirname});
});