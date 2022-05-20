const ORIGIN = '*';
const PORT = process.env.PORT || 8080;

// for "atlas" edit MONGO_URI in -> .env file || for "community server" edit <MyDatabase>
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';
const MONGO_URI =
	process.env.MONGO_URI ||
	`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.bt2le.mongodb.net/?retryWrites=true&w=majority`;
const MONGO_OPTIONS = {};

const JWT_SECRET = process.env.JWT_SECRET || 'unsafe_secret';

module.exports = {
	ORIGIN,
	PORT,
	MONGO_URI,
	MONGO_OPTIONS,
	JWT_SECRET,
};
