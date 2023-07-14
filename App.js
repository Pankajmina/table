
import './App.css';
import Table from './components/Table';
import Table2 from './components/Table2';
import Table3 from './components/Table3';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { useState } from 'react';
import Switch from './components/Switch';
import Add from './components/Add';
import Delete from './components/Delete';


function App() {
  const data = [
    {
      name: 'Ajay',
      rollnumber: '32',
      class: '4',
      age: '10'
    },
    {
      name: 'Sanjay',
      rollnumber: '10',
      class: '2',
      age: '10'
    },
    {
      name: 'Lakshay',
      rollnumber: '13',
      class: '4',
      age: '10'
    }
  ];
  const data2 = [
    {
      name: 'Ajay',
      salary: '2000',
      class: '4',
      age: '10'
    },
    {
      name: 'Sanjay',
      salary: '2000',
      class: '2',
      age: '10'
    },
    {
      name: 'Lakshay',
      salary: '2000',
      class: '4',
      age: '10'
    }
  ];
  const data3 = [
    {

      rollnumber: '6',
      class: '4',

    },
    {

      rollnumber: '10',
      class: '2',

    },
    {

      rollnumber: '13',
      class: '4',

    }
  ];
  const [t, setT] = useState(data)
  const [t2, setT2] = useState(data2)
  const [t3, setT3] = useState(data3)
  const updateTable = (newT) => {
    setT(newT);
  }

  return (
    <>
      <Router>

        <Navbar />
        <div className='d-flex justify-content-start'>
          <Switch table={t} updateTable={updateTable} />
          <Add table={t} updateTable={updateTable} />
          <Delete table={t} updateTable={updateTable} />
        </div>
        <Routes>
          <Route exact path='/' element={<Table table={t} />}></Route>
          <Route exact path='/table2' element={<Table2 table={t2} />}></Route>
          <Route exact path='/table3' element={<Table3 table={t3} />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
