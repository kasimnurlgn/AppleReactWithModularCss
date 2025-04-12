import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Alert from "./components/Alert/Alert";
import FirstSection from "./components/FirstSection/FirstSection";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <FirstSection/>
      <Footer />
    </>
  );
}

export default App;
