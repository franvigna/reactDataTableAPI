import './App.css'
import DataTable, {createTheme} from 'react-data-table-component'
import {useState, useEffect} from 'react'
import 'styled-components'

const App = () => {

  //1 Configurar lo hooks
    const[users, setUsers] = useState([])


  //2 Funcion para mostrar lo datos con fetch
  const URL = 'https://gorest.co.in/public/v2/users'
  const showData = async () => {
    const response = await fetch(URL)
    const data     = await response.json()
    console.log(data)
    setUsers(data)
  }

  useEffect( ()=>{
    showData()
  },[] )

  //3 Configurar las columna para datatable
  const columns = [
    {
        name: 'ID',
        selector: row => row.id,
      },
    {
        name: 'NAME',
        selector: row => row.name,
    },
    {
        name: 'EMAIL',
        selector: row => row.email,
    },
    {
        name: 'STATUS',
        selector: row => row.status,
    },
]
//Personalizar Themes

// createTheme('custom', {
//     text: {
//       primary: '#268bd2',
//       secondary: '#2aa198',
//     },
//     background: {
//       default: '#002b36',
//     },
//     context: {
//       background: '#cb4b16',
//       text: '#FFFFFF',
//     },
//     divider: {
//       default: '#073642',
//     },
//     action: {
//       button: 'rgba(0,0,0,.54)',
//       hover: 'rgba(0,0,0,.08)',
//       disabled: 'rgba(0,0,0,.12)',
//     },
//   }, 'dark');

  //4 Mostrar la data en DataTable

  return (
    <>
      <h1>React Datatables API Fecth</h1>

        <DataTable
        columns={columns}
        data={users}
        pagination
        // theme='custom'
        />

    </>
  );
}

export default App
