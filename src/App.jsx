import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Alert from "./components/Alert/Alert";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection/>
      <Footer />
    </>
  );
}

export default App;
