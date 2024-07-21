const express = require("express");
const nearAPI = require("near-api-js");
const DbConfg = require('./config/db')
const app = express();
const homedir = require("os").homedir();
const crypto = require("crypto");

app.use(express.static('public'));
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.disable('x-powered-by');
app.set('trust proxy', true);
app.use(express.static('public'));

app.get("/", (req, res) => res.send("Express on with folly"));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  
app.use('/api',require('./routes/near_routes'))
console.log(12345,'in')

// DbConfg().then(()=>{
//     
// })
// .catch((error) => {
//     console.log("Invalid database connection...!", error);
// });
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;