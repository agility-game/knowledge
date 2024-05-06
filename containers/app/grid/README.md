# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# grid

Based on "Functional Data Grid" at https://github.com/energydrink9/functional-data-grid

## 100 - Installation

Install functional data grid as follows:

```
$ cd containers/app/grid
$ yarn add functional-data-grid
```

## 200 - Usage

To use Functional Data Grid, you have to import the library and its base types you intend to use, for example:

```
...
import FunctionalDataGrid, { Column, Group } from 'functional-data-grid';
...
```
containers/app/grid/App.js

then you can use it inside your component. For example:

```
import React from 'react';
import FunctionalDataGrid, { Column } from 'functional-data-grid';
import './App.css';

let columns = [
  new Column({
    id : 'name',
    title: 'Name',
    width: 120,
    valueGetter: e => e.name
  }),
  new Column({
    id : 'surname',
    title: 'Surname',
    width: 120,
    valueGetter: e => e.surname
  })
]

let data = [
  {
    'name': 'Donald',
    'surname': 'Duck'
  },
  {
    'name': 'Mickey',
    'surname': 'Mouse'
  }
]

class MyGrid extends React.Component {

  render = () => <FunctionalDataGrid columns={columns} data={data} />

}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Agility Game Knowledge
        </p>
      </header>
      <MyGrid/>
    </div>
  );
}

export default App;

```
containers/app/grid/App.js

## 300 - Testing

Start your app as follows:

```
$ cd containers/app/grid
$ npm start
```

If you get the error: ```...```, then update following entry in package.json:

```
...
  "scripts": {
    "start": "cross-env PORT=3001 react-scripts --openssl-legacy-provider start",
    ...
  }
...
```

package.json

And try again running the start command.

If you receive an error: ```cannot find module xxx``` use below solution:

To resolve this issue in the latest React 18.2.0 version.

You first need to install "crypto-browserify", "biuffer", "stream-browserify", and 'vm-browserify".

Use this command to install these missing *replacement* modules:

```
$ cd containers/app/grid
$ npm install crypto-browserify buffer stream-browserify vm-browserify --legal-peer-deps
```

After the installation go to "webpack.config.js".

You will find this file in the node_modules > react-scripts > config > webpack.config.js.

Inside webpack.config.js, add the following inside ```return{}```:

```
return {
      ...
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        vm: require.resolve('vm-browserify'),
      }
      ...
}      
```      

Save the file and build and run your project.

```
$ npm run build
$ npm start
```

Or use yarn:

```
$ yarn global add serve
$ serve -s build
```

You will be prompted as follows (in case port 3000 is already in use):

   ┌──────────────────────────────────────────────────┐
   │                                                  │
   │   Serving!                                       │
   │                                                  │
   │   - Local:    http://localhost:38251             │
   │   - Network:  http://10.0.5.2:38251              │
   │                                                  │
   │   This port was picked because 3000 is in use.   │
   │                                                  │
   └──────────────────────────────────────────────────┘

Follow the above links in the browser to see your page.   