import React from 'react'
import styled from 'styled-components'
import portfolioPhoto from './portfolioPhoto.jpg'

const Container = styled.div`
    display: flex;
    `;

const Photo = styled.img`
    border-style: solid;
    height: 15em;
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
`;
const Media = styled.div`
    
    display: flex;
    justify-content: space-between;
    font-size: 30px;
`;


const Links = styled.div`
    
    display: flex;
    `;

const Link = styled.a`
    background-color: #FFFFFF;
    margin-right: 0.5em;
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
                        <Link href="#">LinkedIn</Link>
                        <Link href="#">GitHub</Link>
                        <Link href="#">CodePen</Link>
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