import { css } from '@emotion/react'

export const baseCss = css`
  /* -------------------------------- Base Styles */
  body {
    font-size: 12px;
    color: #9399B4;
    background-color: #fbfbfb;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    margin: 0;

  }
  
  h1 {
    font-size: 5em;
    margin: 0;
    padding: 0.3em 0em;
    color: #71B1F8;
  }

  h2 {
    font-size: 2em;
    margin: 0;
    padding: 0.3em 0em;
    color: #71B1F8;
  }

  h3 {
    font-size: 1.5em;
    margin: 0;
    padding: 0.3em 0em;
    color: #71B1F8;
  }

  /* -------------------------------- Layout Style */
  .box {
    padding-top: 5em;
    padding-bottom: 5em;
    filter: drop-shadow(0.1rem 0.1rem 0.5rem rgba(80, 80, 80, 0.4));
  }

  .body {
    border-bottom-right-radius: 3em;
    padding: 1em 5em;
    min-height: 800px;
    width: 1000px;
    background-color: #fbfbfb;
  }

  .Navigation {
    border-top-left-radius: 3em;
    border-bottom-left-radius: 3em;
    width: 120px;
    background-color: #4B73DC;
  }

  .Header {
    padding: 3em 5em 0em 5em;
    min-height: 300px;
    width: 1000px;
    border-top-right-radius: 3em;
    background: #4E97F5;
    background-image: url("../header.png");
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    background-size: 450px auto;
    background-origin: border-box;
    color: #FFF;
  }

  .landing {
    display: block;
    background-color: #fbfbfb;
  }

  /* -------------------------------- Modal Style */

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }

  .placePopup {
    background: white;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
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
    body {
      filter: drop-shadow(0rem 0rem 0rem rgba(80, 80, 80, 0.4));
      display: block;
      margin: 0;
      padding: 0;
    }

    .body {
      border-bottom-right-radius: 0;
      width: auto;
      min-width: 600px;
    }

    .Navigation {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  
    .Header {
      width: auto;
      border-top-right-radius: 0;
    }
  }
`