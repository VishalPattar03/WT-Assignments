const dbConnect = require('./mongodb');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/',async(req,res)=>{
    let result = await dbConnect();
    result = await result.find().toArray();
    res.send(result);
});

app.post('/',async(req,res)=>{
    let result = await dbConnect();
    result.insertOne(req.body);
    res.send('Data inserted sucessfully');
});

app.put('/:id',async(req,res)=>{
    let result = await dbConnect();
    result.updateOne({id:req.params.id},{$set:req.body});
    res.send('Data updated sucessfully');
});

app.delete('/:id',async(req,res)=>{
    let result = await dbConnect();
    result.deleteOne({id:req.params.id});
    res.send('Data deleted sucessfully');
});

app.listen(3000);