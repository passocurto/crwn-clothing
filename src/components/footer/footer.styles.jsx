import styled from "styled-components";

export const FooterConteiner = styled.div`
  justify-content: space-between;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const Clothed = styled.div`
  justify-content: space-between;
  padding: 5px;
  margin: 0 5px; 
  flex-direction: column;
  bottom: 0;

  & a{
    margin: 0 15px;
    font-weight: bold;
  }
`;


export const Developer = styled.div`
  margin: 0 0 25px 0;
  justify-content: space-between;
  flex-direction: column;
`;
