console.log('Sssup Nigga!')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/test', (req, res) => {
  res.send({
    message: 'hiiiiiiiiiiiii!'
  })
})
app.listen(process.env.PORT || 8000)
