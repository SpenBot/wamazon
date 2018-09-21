//////// DEPENDENCIES, CONFIGURATIONS ////////

const { Pool } = require('pg')



//////// DATABASE CONNECTION ////////

const pool = new Pool({
  connectionString: "postgres://postgres:postgres@localhost:5432/wamazon_db",
  max: 5
})

pool.connect((err, client) => {
    if (err) {
      console.log('\n\t Database Connection Error:', err.stack)
      client.release()
      pool.end()
    } else {
      console.log('\n\t Database Connection Successful:', client.database, '\n')
    }
})



//////// EXPORT MODULE ////////

module.exports = pool




// END
