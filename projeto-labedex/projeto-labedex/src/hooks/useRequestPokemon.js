import { useEffect, useState } from "react";
import axios from "axios";

const useRequestPokemon = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const pokeData = []

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
          setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, tente novamente");
      });
  };

  const configData = () => {
    if(data){
      pokeData.push(data.results.map((dado) =>{return dado}))
      return pokeData
    }
  }
  useEffect(getData, [url]);
  useEffect(configData, [data])

  return pokeData;
};

export default useRequestPokemon;
