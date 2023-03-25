import React, { useState, useEffect } from "react";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import CircleLoader from "react-spinners/CircleLoader";
import Skills from "./Components/Skills/Skills";
import Backtotopbutton from "./Components/Backtotopbutton/Backtotopbutton";

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);

    const handleContextMenu = (e) => {
      e.preventDefault()
    }
    document.addEventListener("contextmenu", handleContextMenu)
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }

  }, []);


  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault()
  //   }

  //   document.addEventListener("contextmenu", handleContextMenu)

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu)
  //   }
  // }, [])
  return (
    <>
      {loading ? (
        <div className="loader">
          <CircleLoader
            size={150}
            color={"#999"}
            loading={loading}
            speedMultiplier={1.5}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Backtotopbutton />
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
