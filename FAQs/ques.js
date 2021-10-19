import React,{useState} from 'react'
import { RiSubtractLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

function Ques({id,title,info}) {
    const [btn,setbtn]=useState(false)
   
    const change=()=>{
         setbtn(!btn)   
    }
   
    return (
      <>
      <article>
          <header> 
          <h4>{id}. {title}

          <button  onClick={change}> 
          {btn? <RiSubtractLine/> : <FiPlus/>}
          </button>
          </h4>
          </header>
          

       {btn ?<p>{info}</p>:null}
      </article>

      </>
    )
}

export default Ques
