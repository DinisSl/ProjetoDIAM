import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import Counter from "../components/Counter.jsx";
import Description from "@/components/Description.jsx";

const Homepage = () => {
  return (
    <>
      <Header/>
      <Counter/>
      <Description/>
      <Footer/>
    </>
  );
}

export default Homepage;