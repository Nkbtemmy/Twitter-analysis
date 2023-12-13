module.exports = {
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	plugins: ["@typescript-eslint", "jest"],
	root: true,
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		// indent: ["error", 2],
	},

	env: {
		node: true,
		jest: true,
	},
	overrides: [
		{
			files: ["src/**/*.ts"],
			extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
			rules: {},
		},
	],
};
