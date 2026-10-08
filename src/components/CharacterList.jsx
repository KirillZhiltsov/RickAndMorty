import Character from './Character.jsx'
import PageSwitcher from './PageSwitcher.jsx'
import {useState, useEffect} from 'react'
const CharacterList  = () => {
    const [data,setData] = useState([])
    const [page, setPage] = useState(1)

    async function loadCharacters(page) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const dat = await response.json()
        setData(dat.results)
        console.log(dat)
    }
    useEffect(() => {loadCharacters(page)
    }, [])

    function goToPage(num) {
        setPage(num)
        loadCharacters(num)
    }

    return(
        <>
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
        <PageSwitcher
            onActive = {page}
            setActive = {goToPage}
        />
        </>
    )
}

export default CharacterList