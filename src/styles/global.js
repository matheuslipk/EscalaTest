import { createGlobalStyle } from 'styled-components';
import { cores } from '../constants';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    ::selection{
      background: ${cores.secundaria};
      color: ${cores.textPrimary};
    }
  }

  html{
    display: flex;
    min-height: 100%;
  }

  body{
    flex:1;
    background: #fff;
    font-family: Arial, Helvetica, sans-serif;
    align-self: stretch;
  }

  button{
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }

  #root{
    display: flex;
    min-height: 100%;
    /* border: 1px solid red; */
  }

  a{
    text-decoration: none;
  }

`;
