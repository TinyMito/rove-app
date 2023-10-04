import { css } from '@emotion/react'

export const baseCss = css`
  /* -------------------------------- Base Styles */
  body {
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    filter: drop-shadow(0.1rem 0.1rem 0.5rem rgba(0, 0, 80, 0.4));
    display: flex;
    flex-direction: column; /* Stack child elements vertically */
    justify-content: top; /* Center vertically */
    align-items: center; /* Center horizontally */
    height: 100vh; /* Take up the full viewport height */
    margin: 0; /* Remove default margin */
    padding-top: 5em;
  }

  h1 {
    font-size: 5em;
    margin: 0;
    padding: 0.3em 0em;
  }

  h2 {
    font-size: 2em;
    margin: 0;
    padding: 0.3em 0em;
  }

  h3 {
    font-size: 1.5em;
    margin: 0;
    padding: 0.3em 0em;
  }

  /* -------------------------------- Layout Style */
  .body {
    padding: 1em 5em;
    min-height: 800px;
    width: 1000px;
    background-color: #fbfbfb;
  }

  .Navigation {
    border-top-left-radius: 3em;
    border-bottom-left-radius: 3em;
    width: 120px;
    background-color: #4A73DC;
  }

  .Header {
    padding: 3em 5em 0em 5em;
    min-height: 300px;
    width: 1000px;
    border-top-right-radius: 3em;
    background: rgb(220,74,141);
    background: radial-gradient(circle, rgba(220,74,141,1) 0%, rgba(85,132,252,1) 100%);
    color: #FFF;
  }

  /* -------------------------------- Elements */

  .MuiButtonBase-root {
    /*font-size: 5em !important;*/
    text-transform: none !important;
  }

  .MuiSvgIcon-root {
    outline: none !important;
  }

  .MuiPaginationItem-root {
    border-radius: 15px !important;
    outline: none !important;
    box-shadow: none !important;
    font-size: 1.5em !important;
  }

  .MuiTimeline-root {
    margin-left: -7em !important;
  }

  .MuiTimelineContent-root {
    padding: 2em !important;
  }

  @media (max-width: 1260px) {
    .body {
      max-width: 700px;
    }
  
    .Navigation {
      max-width: 100px;
    }
  
    .Header {
      max-width: 700px;
    }
  }
`