const mongoose = require('mongoose');

const instance = new mongoose.Schema(
	{
		ssn: {
			type: String,
			unique: true,
			required: true,
		},
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		middle_initial: {
			type: String,
			required: false,
		},
		date_of_birth: {
			type: Date,
			required: false,
		},
		phone_number: {
			type: String,
			required: false,
		},
		drivers_license: {
			type: String,
			required: false,
		},
		email_address: {
			type: String,
			required: false,
		},
		house_id: {
			type: String,
			required: false,
			lowercase: true,
		},
		vehicle: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const modelName = 'Tenant';

module.exports = mongoose.model(modelName, instance);
