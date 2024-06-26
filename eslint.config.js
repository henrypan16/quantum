import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ["**/*.[jsx,tsx,js,ts]"],
		languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
	},
	pluginReactConfig,
	{
		rules: {
			"react/jsx-uses-react": "off",
			"react/react-in-jsx-scope": "off",
		}
	}
];
