import pg from "pg";
import express, { response } from "express";

const app = express();
const pool = new pg.Pool({
    database: 'garage',
});
const PORT = 5050;



//MIDDLEWARE
app.use(express.static('static'));
app.use(express.json());


//---GET ALL CARS----
app.get("/cars", (req, res, next) => {

    pool
        .query('SELECT * FROM cars')
        .then(data => {
            res.send(data.rows);
        })
        .catch(e => console.error(e.stack))
});

//---GET OWNER BY ID ---
app.get("/owners/:id", (req, res, next) => {
    pool.query('SELECT * FROM owners WHERE id = $1', [req.params.id])
        .then(data => {
            res.send(data.rows[0]);
        })
        .catch(err => console.error(erro.stack))
});


app.listen(PORT, () => {
    console.log("listening on PORT " + PORT);
})

// pool.query("SELECT * FROM 'cars' RETURNING *;").then(data => {
//     console.log(data);
// });