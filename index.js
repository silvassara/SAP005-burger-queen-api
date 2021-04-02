const express = require('express')
const routes = require('./server/routes/index')

const app = express()
const port = 3000
const morgan = require('morgan');

app.use(morgan('dev'));
app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})