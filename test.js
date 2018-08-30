const mongoose = require('mongoose')

const Post = require('./database/models/Post')


mongoose.connect('mongodb://localhost/node-js-test-blog')

/*Post.create({
    title: 'gil ben david',
    description: 'blog test page',
    content: 'mongo db is great!!'
},(error,post) => {
    //console.log(error,post)
})
Post.create({
    title: 'nir ben david',
    description: 'blog test page',
    content: 'mongo db is great!!'
},(error,post) => {
    //console.log(error,post)
})
Post.create({
    title: 'tal ben david',
    description: 'blog test page',
    content: 'mongo db is great!!'
},(error,post) => {
    //console.log(error,post)
})
var titleToDelete = {title:'gil ben david'}
Post.deleteOne(titleToDelete,(error,post)=>{
    //console.log(error,post)
})


Post.deleteMany(titleToDelete,(error,post)=>{
    //console.log(error,post)
})

var titleToDelete = {title:'nir ben david'}
Post.find({title:'nir ben david'}, (error,post)=>{
    console.log(error,post)
})


Post.findById("5b87a86d8110006991a74130",(error,post) => {
    console.log(error,post)
})

Post.findByIdAndUpdate("5b87a86d8110006991a74130",{
    title: 'nir is my life'
},(error,post) => {
    console.log(error,post)
})*/

