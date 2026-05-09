import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle,} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const NavMenu = () => {


    return (
        <div>
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link to="/login">Login</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link to="/loginmanager">Login Manager</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link to="/signup">Sign Up</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
    )
}

export default NavMenu;