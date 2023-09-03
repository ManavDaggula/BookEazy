import React from 'react'
import ServicemenShowCard from './Components/ServicemenShowCard/ServicemenShowCard'
import person1Image from "./assets/person1.png"
import "./App.css"
function App() {
  return (
    <>
      <ServicemenShowCard name="Manav Daggula" rating="4" image={person1Image} />
      <ServicemenShowCard name="Manav Daggula" rating="4" image={person1Image} />
      <ServicemenShowCard name="Manav Daggula" rating="4" image={person1Image} />
      <ServicemenShowCard name="Manav Daggula" rating="4" image={person1Image} />
      <ServicemenShowCard name="Manav Daggula" rating="4" image={person1Image} />
    </>

  )
}

export default App