import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
 }

 :root {
    --white: #FFFFFF;
    --black: #000000;
    --gray-1: #F3F3F3;
    --gray-2:#e7e7e7;
    --gray-3:#959595;
    --gray-4: #3D3D3D;
    --gray-5: #121212;
    --gray-3-opaque-1: #3D3D3D33;
    --gray-3-opaque-2: #3D3D3DBF;
 }

 a{
    color: inherit;
    text-decoration: none;
 }

 button {
    cursor: pointer;
 }

 ul, ol, li {
    list-style: none;
 }

 body {
    min-width: 100%;
    min-height: 100vh;
    background-color: var(--white);
 }
`;
