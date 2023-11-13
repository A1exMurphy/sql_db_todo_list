const router = require('express').Router();
const pool = require('../modules/pool');



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
router.post('/', (req, res) => {
    console.log(req.body);

    const sqlQueryText = 
    `
    INSERT INTO "todos"
        ("text", "isComplete")
        VALUES
        ($1,$2);
    `
    const sqlValues = [req.body.text, req.body.isComplete];
    console.log(sqlValues, "is the task being added from client");

    pool.query(sqlQueryText, sqlValues)
        .then((dbResult) => {
            res.sendStatus(201);
            console.log('POST successful');
        }).catch((dbError) => {
            res.sendStatus(500);
        })
})

//PUT to change status of tasks 
router.put(`/:id`, (req, res) => {
    const sqlQueryText = 
    `
    UPDATE "todos"
    SET "isComplete" = 'true'
    WHERE "id" = ($1);
    `

    const sqlValues = [
        req.params.id
    ];

        pool.query(sqlQueryText, sqlValues)
            .then((dbResult) => {
                res.sendStatus(201);
                console.log('updated isComplete');
            }).catch((dbError) => {
                res.sendStatus(500);
            })
})

//DELETE to remove a task from the list
router.delete(`/:id`, (req, res) => {
    console.log(req.body)
    const sqlQueryText =
    `
    DElETE FROM "todos"
	WHERE "id" = ($1);
    `
    const sqlValues = [
        req.params.id
    ];
    console.log(sqlValues, "this should be the task ID")

        pool.query(sqlQueryText, sqlValues)
            let testVariable = dbResult
            .then((testVariable) => {
                res.sendStatus(200);
            })
            .catch((dbError) => {
                console.log(dbError, `DELETE query failed`)
                res.sendStatus(500);
            })
});


module.exports = router;
