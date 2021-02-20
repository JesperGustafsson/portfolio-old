import React from 'react'
import styled from 'styled-components'
import portfolioPhoto from './portfolioPhoto.jpg'
import { FaGithub, FaLinkedin, FaEnvelope, FaCodepen } from 'react-icons/fa'

const Container = styled.div`
    display: flex;
    @media (max-width: 760px) {
        flex-direction: column;
        align-items: center;
    }
    
    `;

const Photo = styled.img`
    border-style: solid;
    height: 15em;

    
    @media (max-width: 1090px) {
        height: 12em;
    }
    @media (max-width: 760px) {
        height: 75%;
        width: 75%;
    }
`;

const Intro = styled.div`
    padding-left: 1.5em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


`;

const Intro2 = styled.div`
    font-size: 50px;

    @media (max-width: 1090px) {
        font-size: 40px;
    }
    @media (max-width: 760px) {
        margin-top: 1em;
        font-size: 26px;
    }
`;
const Media = styled.div`
    
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    @media (max-width: 1090px) {
        font-size: 22px;
    }
    @media (max-width: 760px) {
        margin-top: 1em;
        font-size: 14px;
    }
`;


const Links = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    
    `;

const Link = styled.a`
        margin-right: 0.5em;
        margin-top: 0.25em;
    
        :hover {
            text-shadow: 1px 1px, -1px 1px
            
        }


    `;

const JobTitle = styled.div`
    background-color: #FF9000;
    margin: 5px;
    `;



const Header = () => {
    return (
        <Container>
            <Photo src={portfolioPhoto}>
            </Photo>
            <Intro>
                <Intro2>
                    I am Jesper, <br/> aspiring web-developer
                </Intro2>
                <Media>
                    <Links>
                        <Link href="https://www.linkedin.com/in/jesper-gustafsson-61618312a"><FaLinkedin/> LinkedIn</Link>
                        <Link href="https://github.com/JesperGustafsson"><FaGithub/> GitHub</Link>
                        <Link href="#"><FaCodepen/> CodePen</Link>
                        <Link href="#"><FaEnvelope/> E-mail</Link>
                    </Links>
                    <JobTitle>
                        {/* /Front-End Developer/ */}
                    </JobTitle>
                </Media>
            </Intro>

        </Container>
    )
}

export default Header