const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
	title       : { type : String, required : true },
	description : { type : String, required : true },
	image_url   : { type : String, required : true },
	user_id     : { type : String, required : true },
	price       : { type : String, required : true },
});

module.exports = mongoose.model( 'Thing', thingSchema );