// const shree =require('http');
// shree.createServer(function(req,res){
//     res.write("welcome to node js backend class");
//     res.end();
// }).listen(9000,()=>{
//     console.log('server is running in port');
// })

// const fs=require('fs');
// fs.mkdir('./shreedhar',(err)=>{
//     if(err) throw err;
//     console.log('file is created');
// })

// const fs=require('fs');
// fs.rmdir('/.shreedhar',(err)=>{
//    if(err) throw err;
//    console.log('file is deleted');
// })

// fs-writefile
//  const fs=require('fs');
//  fs.writeFile('index.txt','welcome',(err)=>{
//     if(err) throw err;
//     console.log('file is created');
//  })

// // fs-appendfile
// const fs=require('fs');
// fs.appendFile('index.txt','hello shreedhar',(err)=>{
//     if(err) throw err;
//     console.log('file is append');
// })

// const fs=require('fs');
// fs.unlink('index.txt',(err)=>{
//     if(err) throw err;
//     console.log('file is deleted');
// })

// const express=require('express');
// const app=express();
// app.listen(4000,()=>{
//     console.log("server is created");
// })


// // CRUD operations

// C = post
// R = get
// U = Put 
// D = delete



const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dataschema =require('./server');
app.use(express.json())
mongoose.connect("mongodb+srv://SHREE:9677652474@cluster0.hmbkfav.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('db is connected');
})
.catch((err)=>{
    console.log('db is not connect');
});


app .post('/home',async(req,res)=>{
    const data= new dataschema({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        mobile:req.body.mobile
    })
    const datasave = await data.save();
    res.json(data)
})

app.get('/home',(req,res)=>{

    // const name = await dataschema.find()

    res.json('welcme to node class')
})

app.put('/update/:id',async(req,res)=>{
    const up = await dataschema.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        {
            new:true
        }
    )
    
    res.json(up);
})






app.listen(4000,()=>{
    console.log('server is connected');
})

