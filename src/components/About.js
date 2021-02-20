import React from 'react'
import styled from 'styled-components'


/* @media (max-width: 1090px) {
    width: 700px;
  }

  @media (max-width: 760px) {
    width: 360px;
  }
   */
const Container = styled.div`
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;


`;

const SectionTitle = styled.div`
    border-bottom: solid;
    border-width: 2px;
    padding-bottom: 0.5em;
    width: 40%;
    font-weight: 900;
    font-size: 36px;
    text-align: center;


`;


const SectionContent = styled.div`

    margin-top: 1em;
    width: 100%;
    font-size: 20px;
    line-height: 1.75em;
    @media (max-width: 1090px) {
     font-size: 16px;   
    }
    @media (max-width: 760px) {
     font-size: 12px;   
    }
`;

const About = () => {
    return (
        <Container>
           <SectionTitle>
               About me
           </SectionTitle>

           <SectionContent>
                I studied Computer Science at Lund University, Sweden (2014 - 2017). 
                Afterwards, I decided to study Japanese, also at Lund Univeristy (2017 - 2020), 
                partly because I wanted to come into contact with a wide variety of people and their ideas/perspectives,
                rather than spend most of my young adulthood with mostly coders. After coming back to Sweden from
                my exchange year, I started dabbling in front-end development and started taking it more
                seriously in February of 2021, when I decided to consistently spend a few hours a day making 
                personal projects to build a portfolio while searching for a job.
                My ideal company would either work towards building a sustainable future or help people.
            </SectionContent>
        </Container>
    )
}

export default About
