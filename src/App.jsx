import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Alert from "./components/Alert/Alert";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection/>
      <Footer />
    </>
  );
}

export default App;
