import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}


a {
    text-decoration: none;
    color: black;
}

body {
    margin: 0;
    padding: 20px 60px;
    font-family: 'Open Sans Condensed', sans-serif;
    
    @media screen and (max-width: 800px;){
       padding: 10px  ;
    }
    
}

`;