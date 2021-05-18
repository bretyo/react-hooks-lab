import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Spell from './Spell';

function App() {
  const [spells, setSpells] = useState([])

  useEffect(()=>{
    axios.get(`https://www.dnd5eapi.co/api/spells?level=5`).then(res=>{
      setSpells(res.data.results)
    })
  }, [])
  console.log(spells)
  return (
    <div className="App">
      {spells.length>0? spells.map(spell=>{
        return <Spell key={spell.index} spell={spell} />
      })
    : 'Loading....'}
    </div>
  );
}

export default App;
