import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import Counter from "../components/Counter.jsx";
import LoginManager from "@/components/LoginManager.jsx";
import Description from "@/components/Description.jsx";
import NavMenu from "@/components/NavMenu.jsx";

function Homepage() {
  return (
    <>
      <Header/>
      <NavMenu/>
      <LoginManager/>
      <Counter/>
      <Description/>
      <Footer/>
    </>
  );
}

export default Homepage;