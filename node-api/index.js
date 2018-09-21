//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())



//////// START SERVER ON PORT ////////

app.set('port', 3000)

app.listen(app.get('port'), () => {
  console.log(`\n\t Node-API Running On PORT:${app.get('port')}`)
})



/////// ROUTES ////////

const inventoryRoutes = require('./routes/inventoryRoutes')

app.use('/', inventoryRoutes)




// END
