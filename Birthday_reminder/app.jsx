import React,{useState} from 'react'
import './App.css';
import data from './data'
import List from './list';

function App() {
  const [people,setPeople]= useState(data)
  return (
  <>
      <main>
        <section className='App'>
          <div className="container"> 
               <h3>{people.length} Birthday Today</h3>
               <List people={people}></List>
               <button onClick={()=>setPeople([])} >clear all </button>
          </div>
        </section>
      </main>
  
 </>
  );
}

export default App;
