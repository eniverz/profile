import tsPlugin from "@typescript-eslint/eslint-plugin"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import { builtinRules } from "eslint/use-at-your-own-risk"

const eslintRecommendedRules = Object.fromEntries(
    Array.from(builtinRules)
        .filter(([, rule]) => rule.meta?.docs?.recommended)
        .map(([ruleName]) => [ruleName, "error"])
)

export default [
    {
        ignores: ["dist"]
    },
    {
        files: ["**/*.{js,cjs,mjs,ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                document: "readonly",
                window: "readonly"
            },
            sourceType: "module"
        },
        rules: eslintRecommendedRules
    },
    ...tsPlugin.configs["flat/recommended"],
    {
        files: ["**/*.{ts,tsx}"],
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
        }
    }
]
