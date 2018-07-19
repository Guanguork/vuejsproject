const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const MongoClient = require('mongodb').MongoClient

var db 

MongoClient.connect('mongodb://dbuser:all4pass@ds235711.mlab.com:35711/mymongodb', (err, client) => {
  if (err) return console.log(err)
  console.log('okmackey')
})

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))