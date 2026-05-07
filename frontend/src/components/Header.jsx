import axios from "axios";
import { useState, useEffect } from "react";

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
    <div className="text-center py-10 border-b border-border">

      {racesList.length > 0 ? (
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
            {racesList[0].name}
          </h1>

          <h4 className="text-xl font-medium text-muted-foreground mt-2">
            Data: {new Date(racesList[0].date).toLocaleString()}
          </h4>
        </div>
      ) : (
        <h4 className="text-xl font-semibold text-destructive mt-2">
          Não há corridas!!!
        </h4>
      )}

    </div>
  );
}

export default Header;