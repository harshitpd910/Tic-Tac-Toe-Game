import React from 'react'
import { useEffect } from 'react';
import './board.css'

const Board = () => {

  const clickHandler = (element) => {
    const targetDiv = element.target.className.split(" ").filter((classname) => classname != "indiv")[0];
    console.log(`target div is : ${targetDiv}`)
  }

  useEffect(() => {

    document.querySelectorAll('.indiv').forEach((comp)=>{comp.addEventListener('keyup',clickHandler)})


  }
  ,[])

  window.addEventListener('keyup',clickHandler)

  // let a =new Array(9);
  let a = Array.from({length:9})   
   

  return (
    <>
    <div className="main">
      <div className="header">
        <h1>TIC-TAC-TOE</h1>
      </div>
      <div className="body">
        <div className="leftbar">
          <h1>body-now add LOGIC</h1>
        </div>
        <div className="boardbox">
          <div className="boardgame">
            {/* { Array.from({ length:9}).map((item,index)=>{return <div className=  {`indiv indiv${index+1} `} >as</div>})} */}
            {
              a.map((_,index)=> <div className={`indiv indiv${index+1}`}>25</div>)
            }          
          </div>
          {/* {
            document.querySelectorAll(".indiv").forEach((element) => 
              element.addEventListener("click",clickHandler)
            )
          } */}
        </div>
        <div className="rightbar">

        </div>
      </div>
      <div className="footer">

      </div>
     
    </div>
    
    
    
    
    
    </>
  )
}

export default Board