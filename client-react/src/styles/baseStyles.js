import { css } from '@emotion/react'

export const baseCss = css`
  /* -------------------------------- Base Styles */
  body {
    font-size: 13px;
    color: #9399B4;
    background-color: #E7F1FA;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }
  
  h1 {
    font-size: 3.5em;
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
    display: flex;
    flex-direction: column;
    /* justify-content: top; */
    align-items: center;
    /* height: 100vh; */
  }

  .body {
    border-bottom-right-radius: 3em;
    padding: 1em 3em;
    min-height: 800px;
    width: 700px;
    background-color: #fbfbfb;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .Navigation {
    border-top-left-radius: 3em;
    border-bottom-left-radius: 3em;
    width: 100px;
    background-color: #4B73DC;
  }

  .Header {
    padding: 3em 5em 0em 5em;
    min-height: 300px;
    max-width: 800px;
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
    color: #4B73DC !important;
    background: #E7F1FA !important;
    border-radius: 0.5em !important;
  }

  .MuiButtonBase-root:hover {
    text-transform: none !important;
    color: #E7F1FA !important;
    background: #71B1F8 !important;
  }

  .MuiSvgIcon-root {
    outline: none !important;
  }

  .MuiPagination-root {
  }

  .MuiPaginationItem-root {
    border-radius: 20px !important;
    outline: none !important;
    box-shadow: none !important;
    font-size: 2em !important;
    height: 50px !important;
    width: 50px !important;
  }

  .MuiTimeline-root {
    margin-left: -7em !important;
  }

  .MuiTimelineContent-root {
    padding: 2em !important;
  }

  @media (max-width : 1000px) {
    .box {
      padding-top: unset;
      padding-bottom: unset;
      filter: unset;
      flex-direction: unset;
      align-items: unset;
    }

    .Navigation {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  
    .Header {
      border-top-right-radius: 0;
      width: auto;
    }

    .body {
      border-bottom-right-radius: 0;
      width: unset;
      min-width: 600px;
    }

  }
`