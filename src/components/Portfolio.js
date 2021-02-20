import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 7em;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const SectionTitle = styled.div`
    border-bottom: solid;
    border-width: 2px;
    padding-bottom: 0.5em;
    width: 20%;
    font-weight: 900;
    font-size: 36px;
    text-align: center;
`;


const SectionContent = styled.div`
    margin-top: 1em;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 21em);
    justify-content: space-between;
`;

const Project = styled.a`
    border: solid;
    background-color: #FFFF00;
    height: 20em;
    width: 20em;
    margin: 0.5em;
    overflow: hidden;
    position: relative;

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
    background-color: rgba(52, 73, 94, 0.75);
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
                <Project href ="https://jespergustafsson.github.io/react-dota-api-test/">
                   <ProjectTitle>Currency Exchange</ProjectTitle>
                   <ProjectImage src="https://pyxis.nymag.com/v1/imgs/1a6/fd2/90b8f4c3502e59a232ef01300bc6287c0d-29-grumpy-cat.rsquare-zoom.w190.jpg"></ProjectImage>
                </Project>
                <Project>proj3</Project>
                <Project>proj4</Project>
                <Project>proj5</Project>
                <Project>proj6</Project>
            </SectionContent>
        </Container>
    )
}

export default Portfolio
