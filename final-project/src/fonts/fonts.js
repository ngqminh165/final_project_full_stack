import { createGlobalStyle } from "styled-components"
import FancyMeWoff from "./Fancy-Me.woff"
import FancyMeWoff2 from "./Fancy-Me.woff2"

export default createGlobalStyle`
    @font-face {
        font-family: 'Fancy Me';
        src: local('Fancy Me'), local('FancyMe'),
        url(${FancyMeWoff2}) format('woff2'),
        url(${FancyMeWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
`
