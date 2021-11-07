const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.json())

app.use(express.static('client/dist'))

app.listen(port, () => {console.log(`Server listening on port ${port}`)});

