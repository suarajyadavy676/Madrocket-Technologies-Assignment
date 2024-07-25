import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";
import "animate.css"
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <>
      <Navbar />
      <div className="text-white">
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
