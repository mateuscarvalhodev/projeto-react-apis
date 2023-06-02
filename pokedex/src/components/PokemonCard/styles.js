import styled from "styled-components";

export const Container = styled.div`
width: 440px;
height: 263px;
position: relative;
z-index: 1;
`;

export const ContentCard = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height: 80%;
background: #EAAB7D;
border-radius: 8px;
button {
  
}
`;

export const Details = styled.div`
padding: 20px;
p, h1 {
  color: #fff;
}

`;

export const ButtonContent = styled.div`
display: flex;
justify-content: space-around;
`;

export const ButtonDetails = styled.button`
  margin: 20px;
  background: none;
  border: none;
  text-decoration: underline;
  color: #fff;
  font-size: 16px;
`;
export const ButtonGet = styled.button`
width: 146px;
height: 36px;
border: none;
border-radius: 8px;
background: #fff;
margin-top: 10px
`;

export const Img = styled.img`
position: absolute;
right: 0;
z-index: 3;

`;

export const BackgroundImage = styled.img`
position: absolute;
right: 0;
top: 0;
height: 80%;
z-index: 2;
`;

