import { css } from '@emotion/react'

export const baseCss = css`
  /* -------------------------------- Base Styles */
  body {
    font-size: 13px;
    color: #2A2A2A;
    background-color: #E7F1FA;
    background-image: url('../../background.png');
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
    padding: 0em 0em 0.8em 0em;
    color: #71B1F8;
    transition: all 0.3s ease;
  }

  h2 {
    font-size: 1.75em;
    margin: 0;
    padding: 0.8em 0em 0.8em 0em;
    color: #71B1F8;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 1.25em;
    margin: 0;
    padding: 0.8em 0em 0.8em 0em;
    color: #71B1F8;
    transition: all 0.3s ease;
  }

  /* -------------------------------- Layout Style */
  .box {
    padding-top: 3em;
    padding-bottom: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
  }

  .body {
    border-bottom-right-radius: 2em;
    padding: 25px;
    min-height: 800px;
    background-color: #fbfbfb;
    transition: all 0.3s ease;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    border-radius: 2em;
    box-shadow: rgba(80, 80, 80, 0.4) 0px 2px 15px;
    transition: all 0.3s ease;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 966px;
    transition: all 0.3s ease;
  }

  .navigation {
    border-top-left-radius: 2em;
    border-bottom-left-radius: 2em;
    width: 100px;
    background-color: #4B73DC;
    transition: all 0.3s ease;
  }

  .header {
    padding: 20px 0px 20px 40px;
    min-height: 200px;
    border-top-right-radius: 2em;
    background: linear-gradient(135deg,#9661C2, #71B1F8);
    color: #FFF;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    transition: all 0.3s ease;
  }

  .header-image {
    width: 300px;
    transition: all 0.3s ease;
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

  .box-design-01 {
    padding: 17px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.075);
    margin-bottom: 25px;
  }

  .box-design-02 {
    padding: 25px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.075);
    margin-bottom: 25px;
  }

  .box-design-03 {
    padding: 17px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(150, 150, 150, 0.05);
    margin-bottom: 25px;
  }

  .page-heading {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: rgb(58, 57, 57);
    border-bottom: 5px solid #71B1F8;
  }

  .message {
    display: block;
    padding: 15px 20px;
    margin: 25px;
    border: 2px solid #FFD700;
    background-color: #FFFCF2;
    color: #888;
    font-size: 1.3em;
    border-radius: 10px;
  }

  .message2 {
    display: block;
    padding: 10px 20px;
    margin: 10px;
    border: 1px solid #71B1F8;
    background-color: #E7F1FA;
    color: #888;
    font-size: 1.3em;
    border-radius: 5px;
  }

  .Mui-disabled {
    color: #888 !important;
    background: #ccc !important;
  }

  .MuiButton-contained {
    background-color: #9DD82E !important;
  }

  .MuiButtonBase-root {
    /* font-size: 3em !important; */
    text-transform: none !important;
    /* color: #9399B4; */
    /* background: #FFF !important; */
    border-radius: 0.3em !important;
    box-shadow: rgba(147, 153, 180, 0.35) 0px 0px 10px !important;
  }

  .MuiButtonBase-root:hover {
    text-transform: none !important;
    color: #E7F1FA !important;
    background: #9DD82E !important;
    transition: all 0.3s ease;
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

  .MuiPaper-rounded {
    border-radius: 20px;
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

    .navigation {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      min-width: 150px;
    }
  
    .header {
      border-top-right-radius: 0;
      width: auto;
      min-height: 320px;
    }

    .header-image {
      visibility: hidden;
      width: 1px;
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
      font-size: 2em !important;
    }

    .MuiPaginationItem-root {
      font-size: 2em !important;
    }

  }
`