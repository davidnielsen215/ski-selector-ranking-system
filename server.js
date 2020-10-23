
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},  // helps get rid of deprecation warnings
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    })

    
    const skiRouter = require('./routes/skis')
    app.use('/skis', skiRouter)

// if (process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }
 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})