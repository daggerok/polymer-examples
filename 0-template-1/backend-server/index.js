const express = require('express');
const app = express();

const path = require('path');
const pathTo = rel => path.join(__dirname, '/', rel);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

const db = {
  items: [],
};

const router = express.Router();
// first rest api:
router.get('/items', (req, res) => {
  res.json({
    items: db.items,
  });
});

router.post('/items', (req, res) => {
  console.log(req.body);
  res.json({
    items: db.items,
  });
});

router.use((req, res, next) => {
  console.log(req, res);
  next();
});

app.use('/api/v1', router);

// last SPA index fallback:
router.get('/**', (req, res) => {
  res.sendFile(pathTo(`../index.html`));
});

app.use(express.static(pathTo('../')));

const port = process.env.PORT || 8080;
require('http').Server(app).listen(port, () => {
  console.log(`server is listening http://localhost:${port}/`);
});
