import styled from 'styled-components';

export const ContentContainer = styled.div`
height: 90px;
padding: 0px 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
opacity: 0.6;
position: absolute;
`;

export const TitleContainer = styled.span`
font-weight: bold;
padding: 20px 20px;
margin-bottom: 6px;
font-size: 63px;
text-transform: uppercase;
color: red;
&:hover{         
  opacity: 0.9;
  cursor: pointer;
  color: black;
  transform: scale(1.4);
  transition: transform 15s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}
`;

export const BackgroundImage = styled.div`
width: 100%;
height: 100%;
background-position: center;
background-size: cover;
background: url(${(props)=>props.image}); 
&:hover{
  transform: scale(1.7);
  transition: transform 15s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}
`;

export const BorderContainer = styled.div`
width: 90%;
padding-left: 70px;
padding-right: 20px;
height: 650px ;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
margin: 0 7.5px 15px;
overflow: hidden;
`;
