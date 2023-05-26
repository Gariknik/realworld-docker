const express = require('express');
const {host, port, db} = require("./configuration");
const {connectDb} = require("./helpers/db");
const app = express();


const startServer = () => {
	app.listen(port, () => {
    console.log(`Started ath service on port ${port}`);
		console.log(`On host ${host}`);
		console.log(`Our database ${db}`);
	});
};

app.get('/test', (req, res) => {
	res.send('Our auth server is workibg correctky');
});


connectDb()
	.on('error', console.log)
	.on('disconnected', connectDb)
	.once('open', startServer);
