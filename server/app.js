const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/dcrypt');

const PostModel = require('./models/Post')

const UserRoute = require('./routes/Users-routes')

app.get('/api',(req,res)=>{
    res.send("Api D-crypt")
})

app.get('/api/posts', async(req,res)=>{
    
    const posts = await PostModel.find();
    res.json({ PostData: posts.map(emp => emp.toObject({ getters: true })) });
      
})

app.use('/api/users',UserRoute)

app.listen(5000)