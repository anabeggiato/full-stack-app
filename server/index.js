const express = require('express')
const app = express()

const db = require('./models')

db.sequelize.sync().then(() => { //initialize the db and, then, the server starts to run on the indicated port
    app.listen(3001, () => { //anonymous function that runs whenever the server starts
        console.log('server running on port 3001') //confirm that the server is running on port 3001
    });
})