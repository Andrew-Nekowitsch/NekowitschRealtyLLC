const mongoose = require('mongoose');

const instance = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
			enum: ['user', 'admin'],
			default: 'user',
		},
		tenant_id: {
			type: String,
			required: false,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

const modelName = 'Account';

module.exports = mongoose.model(modelName, instance);
