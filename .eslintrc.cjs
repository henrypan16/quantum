module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@tanstack/eslint-plugin-query/recommended",
		"plugin:@typescript-eslint/strict-type-checked",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs", "tailwind.config.js"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "@tanstack/query"],
	rules: {
		"@tanstack/query/exhaustive-deps": "error",
		"@tanstack/query/no-rest-destructuring": "warn",
		"@tanstack/query/stable-query-client": "error",
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
};
