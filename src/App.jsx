import React from 'react'
import Hero from "./components/Hero/Hero"
import Who from "./components/Who/Who"
import Works from "./components/Works/Works"
import Contact from "./components/Contact/Contact"
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #fff;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
