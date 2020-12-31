import express from 'express'
import hbs from 'hbs'
import path from 'path'

const PORT = process.env.PORT || 3000
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')
const publicPath = path.join(__dirname, '../public')

// CONFIG
const app = express()
app.use(express.static(publicPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// ROUTES
app.get('', (req, res) => {
  res.render('index', {
    title: 'The Simple Express App.',
    name: 'Matt'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'The Simple Express App.',
    name: 'Matt'
  })
})

app.get('/data', (req, res) => {
  res.send([
    {
      name: 'Matt',
      age: 42,
      signed: true
    },
    {
      name: 'Mel',
      age: 41,
      signed: false
    },
    {
      name: 'John',
      age: 32,
      signed: false
    }
  ])
})

app.get('*', (req, res) => {
  res.render('404', {
    msg: '404 Page Not Found'
  })
})

// START SERVER
app.listen(PORT, () => console.log(`Server up on port ${PORT}`))