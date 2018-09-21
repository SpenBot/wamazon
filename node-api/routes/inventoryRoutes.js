//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()
const pool = require('../db-connection/connection')




//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
router.get('/api/inventory', (req, res) => {
    pool.query('SELECT * FROM inventory')
        .catch(err => console.log(err))
        .then((data) => res.json(data.rows))
})

// GET ONE
router.get('/api/inventory/:id', (req, res) => {
    pool.query('SELECT * FROM inventory WHERE id = $1', [req.params.id])
        .catch(err => console.log(err))
        .then((data) => res.json(data.rows[0]))
})

// CREATE
router.post('/api/inventory', (req, res) => {
    pool.query('INSERT INTO inventory (item_name, item_price) VALUES ($1, $2)',
      [req.body.item_name, req.body.item_price]
    )
        .catch(err => console.log(err))
        .then((data) => res.json(data.rows))
})

// UPDATE
router.put('/api/inventory/:id', (req, res) => {
    pool.query('UPDATE inventory SET item_name = $1, item_price = $2',
      [req.body.item_name, req.body.item_price]
    )
        .catch(err => console.log(err))
        .then((data) =>  res.json(data.rows))
})

// DELETE
router.delete('/api/inventory/:id', (req,res) => {
    pool.query('DELETE FROM inventory WHERE id = $1', [req.params.id])
        .catch(err => console.log(err))
        .then((data) => res.json(data))
})



//////// EXPORT MODULES ////////

module.exports = router



// END
