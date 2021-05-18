import axios from 'axios'
import {useState,useEffect} from 'react'
const Pokemon=(props)=>{
    const [pokeInfo, setPokeInfo] = useState([])
    const {name} = props.match.params;
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res=>{
            setPokeInfo(res.data)
        })
        .catch(err=>console.log(err))
    },[name])
    return(
        <div>
            <h1>{pokeInfo.name}</h1>
            <img src={`${pokeInfo.sprites.front_default}`} alt={pokeInfo.name} />
        </div>
    )
}
export default Pokemon