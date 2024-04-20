module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "simple-import-sort",
    "unused-imports",
    "react-refresh",
    "@tanstack/query",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:redux-saga/recommended",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:mdx/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  ignorePatterns: [".eslintrc.cjs"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "../tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "mdx/code-blocks": true,
  },
  rules: {
    eqeqeq: "error",
    "no-nested-ternary": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // side-effect imports
          ["^\\u0000"],
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@)(/.*|$)"],
          [
            "^(constants)(/.*|$)",
            "^(types)(/.*|$)",
            "^(services)(/.*|$)",
            "^(utils)(/.*|$)",
            "^(hooks)(/.*|$)",
            "^(containers)(/.*|$)",
            "^(components)(/.*|$)",
            "^(designSystem)(/.*|$)",
            "^(pages)(/.*|$)",
          ],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Styles last
          ["^(assets)(/.*|$)", "/messages$", "/styles$"],
        ],
      },
    ],

    // disabled rules
    "@typescript-eslint/no-explicit-any": "off",
    // controlled by typescript
    "react/prop-types": "off",
    // // controlled by typescript
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/no-unused-vars": "on",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-void": "off",
    // customized rules
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["block", "block-like"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["block", "block-like"],
      },
    ],
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        propElementValues: "always",
      },
    ],
    "react/jsx-handler-names": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-pascal-case": [
      "error",
      {
        allowNamespace: true,
        allowLeadingUnderscore: false,
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    "no-console": ["error", { allow: ["error", "info", "warn"] }],
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/no-deprecated-options": "error",
    "@tanstack/query/prefer-query-object-syntax": "error",
    "@tanstack/query/stable-query-client": "error",
  },
}
