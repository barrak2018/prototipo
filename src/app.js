const express = require("express")
const engine = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')

// init
const app = express()
require('./database')



//config
app.set('views',path.join(__dirname + '/views') )
app.engine("ejs", engine)
app.set('view engine', 'ejs')
app.set("port", process.env.PORT || 3000)

//middelewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//rutes
app.use('/',require('./Rutes/router'))


app.listen(app.get('port'), () => {
    console.log('online')
  })