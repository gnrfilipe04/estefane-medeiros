import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

*, input, button {
    font-family: 'Louis George Café', sans-serif;
}

html {
    scroll-behavior: smooth;
}

body  {
    overflow-x: hidden;
    position: relative;
}
`