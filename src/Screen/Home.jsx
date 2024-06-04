import Footer from '../Componnent/Footer';
import Main from '../Componnent/Main'
import Navbar from '../Componnent/Navbar'

import { useState , useEffect} from "react";

function Home() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

   
      const handleToggle = (e) => {
        if(e.target.checked) {
        setTheme ("dark");
        }
        else
        setTheme("light")
          }
        
        
        
        
          useEffect ( ()=> {
            localStorage. setItem("theme", theme);
            const localTheme = localStorage.getItem ("theme" );
            document.querySelector("html").setAttribute("data-theme", localTheme);
          }, [theme]);
  return (
    <>
    
    <div>
        <Navbar handleToggle={handleToggle}/>
        <Main/>
    </div>
    <Footer/>
    </>
  )
}

export default Home