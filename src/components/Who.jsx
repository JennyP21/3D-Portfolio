import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Design = styled.div`
  flex: 1;
  position: relative;
`

const Title = styled.h1`
  font-size: 74px;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
  height: 5px;
`

const Subtitle = styled.h2`
  color: #da4ea2;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: #fff;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`


const Who = () => {
  return (
    <Section>
      <Container>
        <Design>

        </Design>
        <Content>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Desc>a creative group of designers and developers with a passion for the arts.</Desc>
          <Button>See out works</Button>
        </Content>
      </Container>
    </Section>
  )
}

export default Who;