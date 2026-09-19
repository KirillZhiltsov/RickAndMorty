import Header from "./components/Header.jsx"
import CharacterList from "./components/CharacterList.jsx";
import {useState} from "react";
const App = () => {
    const [tabActive, setTabActive] = useState()
    function toggleTab(tab) {
        setTabActive(tab);
    }

  return (
      <>
      <Header
      onActive = {tabActive}
      setActive={toggleTab} />
          {tabActive === "Characters" && <CharacterList />}
          {tabActive === "Locations" && <Locations/>}
          {tabActive === "Episodes" && <Episodes/>}
      </>
  )
}

export default App