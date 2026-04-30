import axios from "axios";
import {useState, useEffect} from "react";

function Header() {

  const URL_RACES = "http://localhost:8000/race/api/races/";
  const [racesList, setRacesList] = useState([]);

  const getRaces = () => {
    axios.get(URL_RACES)
      .then((response) => {
        setRacesList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    getRaces();
  }, []);

  return (
    <div className="text-center">
      {/*Se houver uma ou mais races então mostra o nome e o nome da primeira*/}
      {racesList.length > 0 ? (
        <div>
          <h1>{racesList[0].name}</h1>
          <h4>Data: {new Date(racesList[0].date).toLocaleString()}</h4>
        </div>
      ) : (
        <h4>Não há corridas!!!</h4>
      )}
    </div>
  );
}
export default Header;