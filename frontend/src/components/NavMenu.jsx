import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle,} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const NavMenu = () => {


    return (
        <div>
          <NavigationMenu>
            <NavigationMenuList className="gap-2">

              <NavigationMenuItem className="border rounded-lg">
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link to="/">Home</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="border rounded-lg">
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link to="/runnersignup">Inscrição Corredor</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="border rounded-lg">
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link to="/volunteersignup">Inscrição Voluntário</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
    )
}

export default NavMenu;