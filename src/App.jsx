import Header from "./components/Header/Header";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Macbook from "./components/Macbook/Macbook";
import Iphone11Pro from "./components/Iphone11Pro/Iphone11Pro";
import Iphone11 from "./components/Iphone11/Iphone11";
import FirstRow from "./components/FirstRow/FirstRow";
import SecondRow from "./components/SecondRow/SecondRow";
import ThirdRow from "./components/ThirdRow/ThirdRow";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Macbook />
      <Iphone11Pro />
      <Iphone11 />
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <Footer />
    </>
  );
}

export default App;
