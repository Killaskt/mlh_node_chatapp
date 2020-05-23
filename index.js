var app = require('express')();
var http = require('http').createServer(app);

app.get('/api/items', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

const PORT = 3000;

http.listen(PORT, () => console.log(`listening on *:${PORT}`));
