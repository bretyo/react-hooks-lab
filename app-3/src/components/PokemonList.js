import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
const PokemonList=(props)=>{
    const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
    .then(res=>{
      setPokemon(res.data.results)
    })
  },[])
    return(
        <div>
            {pokemon.length>0?
                pokemon.map(poke=>{
                    return <Link key={poke.name} to={`/pokemon/${poke.name}`}><h2>{poke.name}</h2></Link>
                })
            :   'loading...'}
        </div>
    )
}
export default PokemonList