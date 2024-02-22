import BgVideo from "./components/bg-video/BgVideo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import AllRoutes from "./components/Router/AllRoutes"

function App() {
  return (
    <>
      <Header />

      <AllRoutes/>

      <Footer />
    </>
  );
}

export default App;
