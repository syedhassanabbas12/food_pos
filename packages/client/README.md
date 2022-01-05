# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode using dev env as default.\
Open [http://localhost:8080] to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm start-[env]` env=[dev, qa, prod]

Launches the test runner in the interactive watch mode.

### `npm run build-[env]` env=[dev, qa, prod]

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Code Structure

This project follows flat components structure. We can improve this structure by adapting hierarchical structure.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Tools and Add-ons

This project is compiled using webpack and its config is available at root(webpack.config.js)

This project has support for localization and currently only supports english. English locales file is located at src/locales.

Eslint is already setup and working with prettier as extension for eslint. AirBnb JS style guide is also setup and being followed.

date-fns: https://www.npmjs.com/package/date-fns
lodash: https://www.npmjs.com/package/lodash
axios: https://www.npmjs.com/package/axios
react-router-dom: https://www.npmjs.com/package/react-router-dom
react-hook-form: https://react-hook-form.com/
i18next: https://react.i18next.com/getting-started

### How to use

## Add new asset (images/fonts/animations)

1. Images/fonts/animations or any other asset goes to '/src/assets/'
2. This folder is copied to build assets when creating build
3. webpack copies all this using 'CopyWebpackPlugin'

## Add new environment

1. Create env file in environment folder located at the root
2. Add scripts in package.json to make it work

## Add new language locales

1. Create desired language file in '/src/locales/'
2. Add new language in '/src/i18n.js' resources object
3. useTranslation hook can be used to translate

## Configure ES Lint

1. Open '.eslintrc.js' located on the root
2. Customize the rules as per requirement
3. All rules link: https://eslint.org/docs/rules/

## Add contants and ENUMS

1. Create a new file in 'src/constants/'
2. Add all your constants and enums there
