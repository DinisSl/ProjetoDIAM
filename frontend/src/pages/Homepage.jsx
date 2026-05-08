import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import Counter from "../components/Counter.jsx";
import LoginManager from "@/components/LoginManager.jsx";

function Homepage() {
  return (
    <>
      <Header/>
      <LoginManager/>
      <Counter/>
      <Footer/>
    </>
  );
}

export default Homepage;