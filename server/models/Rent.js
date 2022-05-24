const mongoose = require('mongoose');

const instance = new mongoose.Schema(
	{
		amount: {
			type: Number,
			required: true,
			default: 0,
		},
		amount_paid: {
			type: Number,
			required: false,
			default: 0,
		},
		paid_full: {
			type: Boolean,
			required: true,
			default: false,
		},
		date_paid: {
			type: Date,
			required: false,
			default: null,
		},
		period: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const modelName = 'Rent';

module.exports = mongoose.model(modelName, instance);
