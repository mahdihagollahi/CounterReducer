import { BsDashLg } from "react-icons/bs";
import { createSvgIcon } from "@mui/material/utils";
import Navbar from "./Componnent/Navbar";
import { useState , useEffect, useReducer } from "react";


function reducer(state , action) {
  switch(action.type){
    case 'increase' : 
    return{count : state.count +1 }
    case 'decrease' :
      return {count : state.count -1}
      default:
        return state
  }
}


function App() {
  const [state , dispach] = useReducer(reducer , {count : 0})


  const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>,
    "Plus"
  );
  // const[theme,setTheme]= useState(localStorage.getItem('theme')?localStorage.getItem('theme'): 'light')
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

  

function increase () {
  dispach({type: "increase"})
}

function decrease () {
  if(state.count === 0){
   
    return
  }
  dispach({type: "decrease"})
}




  return (
    <>
    <Navbar handleToggle={handleToggle}/>
      <div>
        <div className="flex justify-center  items-center absolute top-[47%] left-[50%] right-[50%] bottom-[80%] shadow-lg">
          <div
            className="w-[100vh] z-1 flex items-center justify-between gap-40 shadow-lg bg-inherit rounded-full px-10 py-10 "
            style={{
              backgroundColor: "var(--element-background)",
              boxShadow: `0 0 40px var(--element-box-shadow)‍‍‍`,
              backdropFilter: "blur(1px)",
            }}

          >
            <div className="flex  ">
              <PlusIcon
                className="text-stone-100 text-3xl  cursor-pointer font-extrabold  dark:text-white  hover:animate-spinOnce   "
               
                onClick={increase}
              />
            </div>

            <div className="text-white font-bold  text-6xl"   disable>
              {state.count}
             
            </div>

            <div className="">
              <BsDashLg
                className="text-stone-100 cursor-pointer font-extrabold text-3xl hover:animate-spinOnce "
                
                onClick={decrease}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



