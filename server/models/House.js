const mongoose = require('mongoose');

const instance = new mongoose.Schema(
	{
		address: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
		},
		rent_id: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const modelName = 'House';

module.exports = mongoose.model(modelName, instance);
