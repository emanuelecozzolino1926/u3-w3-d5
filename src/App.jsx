import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import MobileNavBar from "./components/MobileNavBar";
import NoveltySec from "./components/NoveltySec";
import NewRadio from "./components/NewRadio.";
import OtherSec from "./components/OtherSec";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MobileNavBar />
      <NoveltySec />
      <NewRadio />
      <OtherSec />
      <Footer />
    </>
  );
}

export default App;
