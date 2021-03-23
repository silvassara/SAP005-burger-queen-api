const express = require('express')
const routes = require('./server/routes/index')
const app = express()
const port = 3000

app.use('/', routes);

// app.get('*', (req, res) => {
//   res.send('Hello World!')
// });

app.get("/users/:user_id", (req, resp) => {
  resp.send("Voce consultou o" + req.params.user_id)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})