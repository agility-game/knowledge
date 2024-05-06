# Sankey Diagram

~~Based on "d3-sankey-diagram-quick-test" at https://codesandbox.io/s/4v9co?file=/index.html:0-183~~

**NOTE**: If you get the error "cross-env: Permission denied", follow the advice at https://deepak-cotocus/cross-env-Permission-denied.md


Based on "Functional Data Grid" at https://github.com/energydrink9/functional-data-grid

## 100 - Installation

Install functional data grid as follows:

```
$ cd containers/app/webui
$ yarn add functional-data-grid
```

## 200 - Usage

To use Functional Data Grid, you have to import the library and its base types you intend to use, for example:

```
...
import FunctionalDataGrid, { Column, Group } from 'functional-data-grid'
...

```
containers/app/webui/App.js

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
containers/app/webui/App.js

## 300 - Testing

Start your app as follows:

```
$ cd containers/app/webui
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