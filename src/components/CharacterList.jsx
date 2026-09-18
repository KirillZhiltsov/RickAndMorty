import Character from './Character.jsx'
import {useState, useEffect} from 'react'
const CharacterList  = () => {
    const [data,setData] = useState([])

    async function loadCharacters(page) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const dat = await response.json()
        setData(dat.results)
        console.log(dat)
    }
    useEffect(() => {loadCharacters(1)
    }, [])
    return(
        <div className="character-list">
            {
                data.map((pers) => (<Character
                    key = {pers.id}
                    name={pers.name}
                    status={pers.status}
                    species={pers.species}
                    gender = {pers.gender}
                    image = {pers.image}
                />))
            }
        </div>
    )
}

export default CharacterList