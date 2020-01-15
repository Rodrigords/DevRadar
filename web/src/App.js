import React, { useEffect, useState } from 'react'
import api from './services/api'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs')
      const { devs }= response.data
      setDevs(devs)
    }
    loadDevs()
  }, [])

  async function handleAddDev(newDev){
    const response = await api.post('/devs', newDev)
    const {dev} = response.data
    setDevs([...devs, dev])
  }

  return (
    <div id='App'>
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>

      </aside>
      
      <main>
        <ul>
          {devs.map(dev => (<DevItem key={dev._id} dev={dev}/>))}
        </ul>
      </main>
    </div>
  )
}

export default App;