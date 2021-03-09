import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  html {
    font-size: 10px;
  }
  
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  
  html,
  body,
  #root,
  .App,
  .fullHeight {
    height: 100%;
    
  }
  
  *, ::before, ::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  
  }
`