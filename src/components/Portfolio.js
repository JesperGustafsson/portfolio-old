import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 7em;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1090px) {
        margin-top: 4.5em; 
    }
    @media (max-width: 760px) {
        margin-top: 3em;     }
    
`;

const SectionTitle = styled.div`
    border-bottom: solid;
    border-width: 2px;
    padding-bottom: 0.5em;
    width: 40%;
    font-weight: 900;
    font-size: 36px;
    text-align: center;

    @media (max-width: 1090px) {
     font-size: 28px;   
    }
    @media (max-width: 760px) {
     font-size: 22px;   
    }
`;


const SectionContent = styled.div`

    margin-top: 1em;
    display: grid;
    width: 100%;

    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    justify-items: center;
    align-items: center;
`;

const Project = styled.a`
    border: solid;
    background-color: #FFFF00;
    height: 20em;
    width: 20em;
    overflow: hidden;
    position: relative;
    margin-top: 1em;
    padding: 0;
    @media (max-width: 1090px) {
        height: 20em;
        width: 20em;
    }
    @media (max-width: 760px) {
        height: 20em;
        width: 20em;    
    }

    :hover {
        
        >div {
            display: block;
        }
        >img {
            transform: scale(1.2);
        }

    }
`;

const ProjectImage = styled.img`
    width: 100%;
    transition: all .5s;


`;

const ProjectTitle = styled.div`
    
    height: 100%;
    color: white;
    width: 100%;
    padding-top: 2em;
    text-align: center;
    font-size: 36px;
    position: absolute;
    display: none;
    z-index: 1;
    background-color: rgba(52, 200, 94, 0.75);

`;

const ProjectTitleDev = styled.div`
    height: 100%;
    color: white;
    width: 100%;
    padding-top: 2em;
    text-align: center;
    font-size: 36px;
    position: absolute;
    display: none;
    z-index: 1;
    background-color: rgba(200, 52, 94, 0.75);
`;


const Portfolio = () => {
    return (
        <Container>
            <SectionTitle>
                Portfolio
            </SectionTitle>
            <SectionContent>
                <Project href ="#">
                   <ProjectTitle>This Portfolio!</ProjectTitle>
                    <ProjectImage src="https://pyxis.nymag.com/v1/imgs/1a6/fd2/90b8f4c3502e59a232ef01300bc6287c0d-29-grumpy-cat.rsquare-zoom.w190.jpg"></ProjectImage>
                </Project>
                <Project href ="https://jespergustafsson.github.io/currency-exchanger/"> {/*currency-exchanger*/}
                   <ProjectTitle>CURRENCY EXCHANGER</ProjectTitle>
                   <ProjectImage src="https://pyxis.nymag.com/v1/imgs/1a6/fd2/90b8f4c3502e59a232ef01300bc6287c0d-29-grumpy-cat.rsquare-zoom.w190.jpg"></ProjectImage>
                </Project>
                <Project href ="https://jespergustafsson.github.io/chess/">
                   <ProjectTitleDev>CHESS</ProjectTitleDev>
                   <ProjectImage src="https://pyxis.nymag.com/v1/imgs/1a6/fd2/90b8f4c3502e59a232ef01300bc6287c0d-29-grumpy-cat.rsquare-zoom.w190.jpg"></ProjectImage>
                </Project>                
                <Project href ="https://jespergustafsson.github.io/dungeon-crawler/">
                   <ProjectTitleDev>DUNGEON CRAWLER</ProjectTitleDev>
                   <ProjectImage src="https://pyxis.nymag.com/v1/imgs/1a6/fd2/90b8f4c3502e59a232ef01300bc6287c0d-29-grumpy-cat.rsquare-zoom.w190.jpg"></ProjectImage>
                </Project>  
                <Project href ="https://jespergustafsson.github.io/restaurant/">
                   <ProjectTitleDev>RESTAURANT</ProjectTitleDev>
                   <ProjectImage src="https://pyxis.nymag.com/v1/imgs/1a6/fd2/90b8f4c3502e59a232ef01300bc6287c0d-29-grumpy-cat.rsquare-zoom.w190.jpg"></ProjectImage>
                </Project>  
                <Project href ="https://jespergustafsson.github.io/ikea-clone/">
                   <ProjectTitleDev>IKEA CLONE</ProjectTitleDev>
                   <ProjectImage src="https://pyxis.nymag.com/v1/imgs/1a6/fd2/90b8f4c3502e59a232ef01300bc6287c0d-29-grumpy-cat.rsquare-zoom.w190.jpg"></ProjectImage>
                </Project>  
            </SectionContent>
        </Container>
    )
}

export default Portfolio
