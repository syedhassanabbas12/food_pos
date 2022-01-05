module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": "warn",
    "no-restricted-globals": "off",
    "no-undef": "off",
    "import/prefer-default-export": "warn",
    "react/jsx-filename-extension": "off",
    "react/button-has-type": "off",
    "react/prop-types": "off",
  },
  parserOptions: {
    ecmaVersion: 12,
  },
};
