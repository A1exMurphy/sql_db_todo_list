const router = require('express').Router();
const pool = require('../modules/pool');

//variables to define routes
const todoRouter = express.Router();
const pg = require('pg');

const pool = new pg.Pool({
    hostname: 'localhost',
    port: 5001,
    database: 'weekend-to-do-app',
})


//GET for intial render and updating render
todoRouter.get()

//POST for adding task to db 


//PUT to change status of tasks 


//DELETE to remove a task from the list



module.exports = router;
