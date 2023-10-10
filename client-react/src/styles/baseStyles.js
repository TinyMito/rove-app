import { css } from '@emotion/react'

export const baseCss = css`
  /* -------------------------------- Base Styles */
  body {
    font-size: 13px;
    color: #2A2A2A;
    background-color: #E7F1FA;
    background-image: url('../background.png');
    background-repeat: repeat;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }
  
  h1 {
    font-size: 2.5em;
    margin: 0;
    padding: 0.8em 0em;
    color: #71B1F8;
  }

  h2 {
    font-size: 1.75em;
    margin: 0;
    padding: 0.3em 0em;
    color: #71B1F8;
  }

  h3 {
    font-size: 1.25em;
    margin: 0;
    padding: 0.3em 0em;
    color: #71B1F8;
  }

  /* -------------------------------- Layout Style */
  .box {
    padding-top: 3em;
    padding-bottom: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .body {
    border-bottom-right-radius: 2em;
    padding: 1em 3em;
    min-height: 800px;
    background-color: #fbfbfb;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    border-radius: 2em;
    box-shadow: rgba(80, 80, 80, 0.4) 0px 2px 15px;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 966px;
  }

  .Navigation {
    border-top-left-radius: 2em;
    border-bottom-left-radius: 2em;
    width: 100px;
    background-color: #4B73DC;
  }

  .Header {
    padding: 3em 5em 0em 4em;
    min-height: 200px;
    border-top-right-radius: 2em;
    background: #4E97F5;
    background-image: url("../header.png");
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    background-size: 300px auto;
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

  .page-heading {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: rgb(58, 57, 57);
    border-bottom: 5px solid #71B1F8;
  }

  .MuiButtonBase-root {
    font-size: 3em !important;
    text-transform: none !important;
    color: #9399B4 !important;
    background: #FFF !important;
    border-radius: 0.3em !important;
    box-shadow: rgba(147, 153, 180, 0.35) 0px 0px 10px !important;
  }

  .MuiButtonBase-root:hover {
    text-transform: none !important;
    color: #E7F1FA !important;
    background: #9DD82E !important;
  }

  .MuiMenuItem-root {
    font-size: 1em !important;
  }
  
  .MuiSvgIcon-root {
    outline: none !important;
  }

  .MuiPagination-root {
  }

  .MuiPaginationItem-root {
    border-radius: 15px !important;
    outline: none !important;
    box-shadow: none !important;
    font-size: 2em !important;
    height: 50px !important;
    width: 50px !important;
    box-shadow: rgba(147, 153, 180, 0.35) 0px 0px 7px !important;
  }

  .MuiTimeline-root {
    margin-left: -7em !important;
  }

  .MuiTimelineContent-root {
    padding: 2em !important;
  }

  @media (max-width : 1100px) {
    .box {
      padding-top: unset;
      padding-bottom: unset;
      box-shadow: unset;
      flex-direction: unset;
      align-items: unset;
    }

    .flex-column {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: auto;
      min-width: 700px;
    }

    .Navigation {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      min-width: 150px;
    }
  
    .Header {
      border-top-right-radius: 0;
      width: auto;
      min-height: 320px;
      background-size: 450px auto;
    }

    .body {
      border-bottom-right-radius: 0;
      width: auto;
    }

    h1 {
      font-size: 3.5em;
    }
  
    h2 {
      font-size: 2em;
    }
  
    h3 {
      font-size: 1.5em;
    }

    .MuiButtonBase-root {
      font-size: 5em !important;
    }

    .MuiPaginationItem-root {
      font-size: 2em !important;
    }

  }
`