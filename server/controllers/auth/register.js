const joi = require('joi');
const bcrypt = require('bcrypt');
const Account = require('../../models/Account');
const { signToken } = require('../../middlewares/jsonwebtoken');

async function register(request, response, next) {
	try {
		// Validate request data
		await joi
			.object({
				username: joi.string().required().messages({
					'string.empty': `username is empty`,
					'any.required': `username is empty`,
				}),
				password: joi.string().required().messages({
					'string.empty': `password is empty`,
					'any.required': `password is empty`,
				}),
				repeat_password: joi.string().required().messages({
					'string.empty': `password is empty`,
					'any.required': `password is empty`,
				}),
			})
			.validateAsync(request.body);
	} catch (error) {
		return response.status(400).json({
			error: 'ValidationError',
			message: error.message,
		});
	}

	try {
		const { username, password, repeat_password } = request.body;

		// Verify account username as unique
		const existingAccount = await Account.findOne({ username });
		if (existingAccount) {
			return response.status(400).json({
				error: username,
				message: 'An account already exists with that "username"',
			});
		}

		if (password !== repeat_password) {
			return response.status(400).json({
				error: username,
				message: 'The passwords do not match',
			});
		}

		// Encrypt password
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);

		// Create account
		const newAccount = new Account({ username, password: hash });
		await newAccount.save();

		// Remove password from response data
		newAccount.password = undefined;
		delete newAccount.password;

		// Generate access token
		const token = signToken({ uid: newAccount._id, role: newAccount.role });

		response.status(201).json({
			message: 'Succesfully registered',
			data: newAccount,
			token,
		});
	} catch (error) {
		console.error(error);
		return response.status(500).send();
	}
}

module.exports = register;
