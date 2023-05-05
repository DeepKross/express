let router = require('./router.js');
let express = require('express');

let app = express();

app.use(express.json());
app.use('/api', router);

app.get('/',(req, res) => {
  console.log('Hello World')
  res.status(200).json('It works');
});


//listen to port 3000 by default
app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000!'));

