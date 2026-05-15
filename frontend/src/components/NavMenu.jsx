import {
  NavigationMenu,
  NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList,
  NavigationMenuTrigger, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
    )
}

export default NavMenu;


// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger
// } from "@/components/ui/dropdown-menu.jsx";
//
// <DropdownMenu>
//   <DropdownMenuTrigger className="border rounded-lg px-4 py-2 text-sm font-medium">
//     Inscrições
//   </DropdownMenuTrigger>
//   <DropdownMenuContent align="start">
//     <DropdownMenuItem asChild>
//       <Link to="/runnersignup">Inscrição Corredor</Link>
//     </DropdownMenuItem>
//     <DropdownMenuItem asChild>
//       <Link to="/volunteersignup">Inscrição Voluntário</Link>
//     </DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>