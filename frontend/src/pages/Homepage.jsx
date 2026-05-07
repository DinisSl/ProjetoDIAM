import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import Contador from "../components/Contador.jsx";


function Homepage() {
  return (
    <>
      <Header/>
      <Contador/>
      <Footer/>
    </>
  );
}

export default Homepage;