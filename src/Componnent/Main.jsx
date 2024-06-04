import React from 'react'
import { BsDashLg } from "react-icons/bs";
import { createSvgIcon } from "@mui/material/utils";
import {  useReducer } from "react";


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


function Main() {

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
    <div>
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
                className="text-white   cursor-pointer font-extrabold  dark:text-white text-7xl   hover:animate-spinOnce   "
               style={{fontSize:"38px"}}
                onClick={increase}
              />
            </div>

            <div className="text-white font-bold  text-6xl"   disable>
              {state.count}
             
            </div>

            <div className="flex">
              <BsDashLg
                className="text-white     cursor-pointer font-extrabold text-4xl hover:animate-spinOnce  "
                
                onClick={decrease}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main