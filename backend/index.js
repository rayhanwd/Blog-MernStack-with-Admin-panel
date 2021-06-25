const express = require('express')
const app = express()
const port = process.env.PORT || 5200
const cors = require('cors')
const ObjectId = require('mongodb').ObjectID;
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//Database connection

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tcatg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const PostCollection = client.db(`${process.env.DB_NAME}`).collection(`${process.env.DB_COLLECTION_NAME}`)
    console.log(err)
    //routing declarations

    app.get('/posts', (req, res) => {
        PostCollection.find({})
            .toArray((err, documents) => {
                console.log(err)
                res.send(documents)
            })
    }) //get all posts from database

    app.get('/posts/:id', (req, res) => {
        PostCollection.find({ _id: ObjectId(req.params.id) })
            .toArray((err, documents) => {
                res.send(documents[0])
            })
    }) //get details of single product

    app.post('/addpost', (req, res) => {
        const newblog = req.body;
        PostCollection.insertOne(newblog)
            .then(result => {
                res.send(result.insertedCount > 0)
            })
    })

    app.delete('/delete/:id', (req, res) => {

        PostCollection.deleteOne({ _id: ObjectId(req.params.id) })
            .then(result => {
                res.send(result.deletedCount > 0)
            })
    })

}) //collection end point

app.get('/', (req, res) => {
    res.send('Hello World')
})//default routing

app.listen(port, () => {
    console.log(`${port}`, 'server connected')
})