import axios from "axios";
import { useState, useEffect } from "react";
import NavMenu from "@/components/NavMenu.jsx";
import LoginManager from "@/components/LoginManager.jsx";

const Header = () => {
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
    <div className="text-center ">

      {racesList.length > 0 ? (
        <div>
          <h1 className="text-4xl font-extrabold mt-4 text-foreground">
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

      <div className="flex items-center justify-between w-full p-4">
        <NavMenu/>
        <LoginManager/>
      </div>

    </div>
  );
}

export default Header;