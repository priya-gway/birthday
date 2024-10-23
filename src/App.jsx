import React, { useState } from 'react'
import data from './data';
import List from './List';

const App = () => {
 const [people , setPeople]= useState(data)
 console.log(people);
 
  return (
    <main>
      <section className="container">

       <h2>{people.length} Birthdays Today </h2>
       <List people={people} />
      
       <button className="btn btn-block" type='button' onClick={()=>setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
