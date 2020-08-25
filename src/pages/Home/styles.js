import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

export const Input = styled.div`
  
  border: 1px solid;
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
  border-color: #aaa;
  border-radius: 3px;

  svg{

  }

  input{

    padding: 2px;
    font-size: 20px;
    margin-left: 10px;
    text-align: center;
    border: none;
    border-radius: 2px;
  }
`;

export const ContainerListItens = styled.div`
  
`;

export const ListItens = styled.ul`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  
`;

export const TitleItem = styled.label`
  font-weight: bold;
  font-size: 18px;
  color: #060055;
  margin-bottom: 10px;
`;

export const Item = styled.li`
  display:flex;
  flex-direction: column;
  padding: 40px 20px;
  width: 100%;
  border-bottom : 1px solid #838080;
  div{ 
    display: flex;
    flex-direction: row;
    padding-left: 10px;
  }

`;

export const DivDesc = styled.div`
  border-left: 0px solid #838080;
  margin-right: 8px;
`;

export const ItemDesc = styled.label`
  color: #838080;
`;
