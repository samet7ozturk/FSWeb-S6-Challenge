import React, { useEffect, useState } from "react";
import axios from "axios";

import Karakterler from "./components/Karakterler";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        const charactersData = response.data;
        setCharacters(charactersData);
        console.log("ilk data: ", charactersData);
      })
      .catch((error) => {
        console.error("API isteği sırasında hata oluştu", error);
      });
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="Header">Karakterler</h1>
      </div>
      <div>
        <Karakterler data={characters}></Karakterler>
      </div>
    </>
  );
};

export default App;
