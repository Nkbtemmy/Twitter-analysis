// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	development: {
		use_env_variable: "DATABASE_URL",
		// dialectOptions: {
		//   ssl: {
		//     require: true,
		//     rejectUnauthorized: false,
		//   },
		// },
	},
	test: {
		use_env_variable: "DATABASE_URL",
		// dialectOptions: {
		//   ssl: {
		//     require: true,
		//     rejectUnauthorized: false,
		//   },
		// },
	},
	production: {
		use_env_variable: "DATABASE_URL",
		// dialectOptions: {
		//   ssl: {
		//     require: true,
		//     rejectUnauthorized: false,
		//   },
		// },
		logging: false,
	},
};
