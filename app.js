import router from "./router.js";
import express from 'express';
import bodyParser from "body-parser";

let app = express();

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use('/books', router);

app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
    err.statusCode = 404;

    next(err);
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
        });
})

app.get('/',(req, res) => {
  console.log('Hello World')
  res.status(200).json('Hello World');
});


//listen to port 3000 by default
app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000!'));

