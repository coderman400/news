const express = require('express')
const app = express()
const port = 5000

// app.use(express.static('css'))
// app.use('/css',express.static(__dirname+'css'))
// app.use('/img',express.static(__dirname+'img'))

app.use(express.static('public'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)

app.listen(port, ()=> console.log(`listening on ${port}`))

