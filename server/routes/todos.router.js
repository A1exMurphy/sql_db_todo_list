const router = require('express').Router();
const pool = require('../modules/pool');

//variables to define routes
// const todoRouter = express.Router();



//GET for intial render and updating render
router.get('/', (req, res) => {
    const sqlQueryText = 
    `
    SELECT * FROM "todos"
    ORDER BY "id";
    `
    pool.query(sqlQueryText)
        .then((dbResult) => {
            console.log('dbResult', dbResult.rows);
            res.send(dbResult.rows);
        }).catch((dbError) => {
            res.sendStatus(500);
        })
})

//POST for adding task to db 


//PUT to change status of tasks 


//DELETE to remove a task from the list



module.exports = router;
