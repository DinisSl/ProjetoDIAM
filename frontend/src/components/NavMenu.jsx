import {
  NavigationMenu,
  NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList,
  NavigationMenuTrigger, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const NavMenu = () => {
  const URL_RACES = 'http://localhost:8000/race/api/races/';
  const URL_USER = 'http://localhost:8000/race/api/user/';
  const [races, setRaces] = useState([]);
  const [isStaff, setIsStaff] = useState(false);

  useEffect(() => {
    axios.get(URL_RACES)
      .then((response) => setRaces(response.data))
      .catch(() => console.log('erro ao ir buscar as corridas'));
  }, []);

  useEffect(() => {
    axios.get(URL_USER, { withCredentials: true })
      .then((response) => setIsStaff(response.data.is_staff))
      .catch(() => console.log('user not Staff'));
  }, []);

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="gap-2">

          <NavigationMenuItem className="border rounded-lg">
            <NavigationMenuTrigger>Corridas</NavigationMenuTrigger>
            <NavigationMenuContent>
              {races.map((race) => (
                <NavigationMenuLink
                  key={race.id}
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to={`/race/${race.id}`}>{race.name}</Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="border rounded-lg">
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {isStaff && (
            <NavigationMenuItem className="border rounded-lg">
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/admin">Participantes</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}

          <NavigationMenuItem className="border rounded-lg">
            <NavigationMenuTrigger>Inscrições</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/runnersignup">Inscrição Corredor</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/volunteersignup">Inscrição Voluntário</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavMenu;