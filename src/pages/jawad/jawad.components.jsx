import React from 'react';
import { BackgroundImage,ContentContainer,TitleContainer,BorderContainer } from './jawad.styles';


const Jawad = () => (
    <BorderContainer>
        <BackgroundImage  image="https://peakvisor.com/img/news/mount_fuji.jpg" />
        <ContentContainer>
            <TitleContainer>
                Jawad is a react developer
            </TitleContainer>
        </ContentContainer>
    </BorderContainer>
);

export default Jawad;