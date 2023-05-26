const express = require('express');
const mongoose = require('mongoose');
const {host, port, db} = require("./configuration");
const {connectDb} = require("./helpers/db");
const app = express();



const postSchema = new mongoose.Schema({
  name: String
});

const Post = mongoose.model('Post', postSchema);


app.get('/test', (req, res) => {
	res.send('Our api server is workibg correctky');
});

const startServer = () => {
	app.listen(port, () => {
    console.log(`Started api service on port ${port}`);
		console.log(`On host ${host}`);
		console.log(`Our database ${db}`);

  //Post.find().then(posts => {
  //     console.log('posts', posts);
  //}).catch(error => {
  //	console.error(error);
  //});
		const silence = new Post({ name: 'Silence' });
		silence.save().then(saveSilence => {
			console.log('It saveSilence with volumes!', saveSilence);
		}).catch(error => {
			console.error(error);
		});
	});
};


connectDb()
	.on('error', console.log)
	.on('disconnected', connectDb)
	.once('open', startServer);
