import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label"

const RACES_URL = 'http://localhost:8000/race/api/races/';
const RUNNERSIGNUPS_URL = 'http://localhost:8000/race/api/runnersignups/';

const RunnerSignupLogic = () => {
  const [racesList, setRacesList] = useState([]);
  const [selectedRace, setSelectedRace] = useState('');
  const [,] = useState('');

  const getRaces = () => {
    axios.get(RACES_URL, { withCredentials: true })
      .then((response) => { setRacesList(response.data) })
      .catch((error) => { console.error("Error fetching races: ", error) });
  };


    const getCSRFToken = () => {
    return document.cookie.split('; ')
    .find(row => row.startsWith('csrftoken='))
    ?.split('=')[1];
    }


  const handleRunnerSignup = () => {
    if (!selectedRace) return;

    axios.post(
        RUNNERSIGNUPS_URL,
        { race: selectedRace }, {headers: {"X-CSRFToken": getCSRFToken(),},
            withCredentials: true,
        }
    )
    .then(() => {
        alert("Inscrição submetida!");
    })
    .catch((error) => {
        console.error("Error on the signup:", error);
    });
};






  useEffect(() => { getRaces() }, []);

  return (
    <Card className="w-1/5">
      <CardHeader>
        <CardTitle>Inscrição</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">

        <div className="flex flex-col gap-3">
          <Label htmlFor="race">Selecionar Corrida</Label>

          <Select onValueChange={setSelectedRace} value={selectedRace}>
            <SelectTrigger id="race" className="w-full">
              <SelectValue placeholder="Escolha uma corrida..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {racesList.map((race) => (
                  <SelectItem key={race.id} value={race.id.toString()}>
                    {race.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

        </div>

      </CardContent>

      <CardFooter>
        <Button className="w-full" onClick={handleRunnerSignup} disabled={!selectedRace}>
          Inscrever-me
        </Button>
      </CardFooter>

    </Card>
  );
}

const RunnerSignup = () => {
  return (
    <div>
      <Header />
      <div className="p-10 flex items-start justify-center">
        <RunnerSignupLogic/>
      </div>
      <Footer />
    </div>
  );
}

export default RunnerSignup;