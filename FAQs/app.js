import React, { useState } from 'react'
import questions from './question';
import Ques from './ques';
import './App.css';

function App() {
  const [ques,setQues]= useState(questions)
  const [btn,setBtn] = useState(false)
  return (
    <>
    <div>
      FAQs
    </div>
    {ques.map((q)=>{
      return <Ques key={q.id} {...q}> </Ques>
    })}
  </>
  )
}

export default App


