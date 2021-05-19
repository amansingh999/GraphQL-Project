const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const testSchema = require('./schema/types_schema');

const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 4000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Aman:Aman123@@cluster0.7q3yo.mongodb.net/AWS_Project?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false 
})
mongoose.connection.once('open',()=>{
    console.log('Yes! We are Connected..')
}).catch((err)=>console.log('no connection')); 
 
app.use('/graphql', graphqlHTTP({
    graphiql:true,
    schema: schema
}))

app.listen(port,()=>{
    console.log("listining to port 4000..")
}) 