import React from 'react'
import './App.css';
export default function List(props) {
    return (
        <>
        <h2>{
           props.people.map((person)=>{
               const {id,name,age,image} = person
              return <article className="art">
                  <img className="img" src={image} alt={name}></img>
                  <div>
                    {name} <br/>    
                    {age} years
                  </div>
              </article>
           })

           }</h2>
        </>
    )
}
