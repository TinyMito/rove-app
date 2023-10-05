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
    filter: drop-shadow(0.1rem 0.1rem 0.5rem rgba(80, 80, 80, 0.4));
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding-top: 5em;
    padding-bottom: 5em;
  }

  h1 {
    font-size: 5em;
    margin: 0;
    padding: 0.3em 0em;
    color: #005861;
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
    background-color: #1DAEA6;
  }

  .Header {
    padding: 3em 5em 0em 5em;
    min-height: 300px;
    width: 1000px;
    border-top-right-radius: 3em;
    background: #8EDBCD;
    /*background: radial-gradient(circle, rgba(220,74,141,1) 0%, rgba(85,132,252,1) 100%);*/
    color: #005861;
  }

  /* -------------------------------- Elements */

  .MuiButtonBase-root {
    text-transform: none !important;
    color: #FE8BAF !important;
    background: #FEDEE4 !important;
    border-radius: 0.5em !important;
  }

  .MuiButtonBase-root:hover {
    text-transform: none !important;
    color: #FEDEE4 !important;
    background: #FE8BAF !important;
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