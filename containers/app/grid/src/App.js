import React from 'react';
import logo from './logo.svg';
import FunctionalDataGrid, { Column } from 'functional-data-grid';
import './App.css';

let columns = [
  new Column({
    id: 'name',
    title: 'Name',
    width: 120,
    valueGetter: e => e.name
  }),
  new Column({
    id: 'surname',
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
