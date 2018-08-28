import express from 'express';
import path from 'path';

const ejs = require("ejs").__express;
const app = new express();
const port = 3000;

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('.ejs', ejs);

// Set static path - Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server started on PORT ${port}`);
});
