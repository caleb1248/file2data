const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.use(express.static('.'));
app.use(express.raw({type: '*/*'}));

app.post('/api', function(req, res) {
	res.send("data:" + req.headers['content-type'] + ';base64,' + req.body.toString("base64"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});