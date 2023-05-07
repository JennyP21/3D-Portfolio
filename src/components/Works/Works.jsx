import React, { useState } from 'react'
import styled from 'styled-components'
import WebDesign from './Model Components/WebDesign'
import Development from './Model Components/Development'
import ProductDesign from './Model Components/ProductDesign'
import SocialMedia from './Model Components/SocialMedia'
import IPhone from './Model Components/Illustration'

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  position: relative;

  ::after {
    content: "${props => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #ffc0cb;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear forwards; 
    }

    @keyframes moveText {
      to{
        width: 100%;
      }
    }
  }

`

const Design = styled.div`
  flex: 1;
`

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Content>
          <List>
            {data.map(
              item => <ListItem key={item} text={item} onClick={() => setWork(item)}>{item}</ListItem>
            )}
          </List>
        </Content>
        <Design>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "Social Media" ? (
            <SocialMedia />
          ) : work === "Illustration" ? (
            <IPhone />
          ) : (
            <ProductDesign />
          )}
        </Design>
      </Container>
    </Section>
  )
}

export default Works