import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;

    }

    :root{
        --color-background: #FBFBFD;
        --color-gradient-1:linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%);
        --color-green-dark: #27AE60;
        --color-green-light: #6BBE92;
        --color-primary: #0D0D0D;
        --color-grey-0: #f8f8f8;
        --color-grey-1: #dbe1e8;
        --color-grey-2: #b2becd;
        --color-grey-3: #6c7983;
        --color-grey-4: #454e56;
        --color-grey-5: #2a2e35;
        --color-grey-6: #12181b;
        --color-white: #fff;
        --button-gradient-1:linear-gradient(110.42deg, rgba(107, 190, 146, 0.1) 29.2%, rgba(245, 102, 146, 0.1) 63.56%);
        --button-gradient-2:linear-gradient(110.42deg, rgba(25, 151, 222, 0.1) 29.2%, rgba(168, 85, 247, 0.1) 63.56%);
        --button-gradient-3:linear-gradient(110.42deg, rgba(25, 151, 222, 0.1) 29.2%, rgba(168, 85, 247, 0.1) 63.56%);
        --button-gradient-4:linear-gradient(110.42deg, rgba(168, 85, 247, 0.1) 29.2%, rgba(245, 102, 146, 0.1) 63.56%);
        --button-gradient-5:linear-gradient(110.42deg, rgba(25, 151, 222, 0.1) 29.2%, rgba(168, 85, 247, 0.1) 63.56%);
        --button-gradient-6:linear-gradient(110.42deg, rgba(25, 151, 222, 0.1) 29.2%, rgba(168, 85, 247, 0.1) 63.56%);
        --button-gradient-7:linear-gradient(110.42deg, rgba(41, 25, 222, 0.1) 29.2%, rgba(235, 87, 87, 0.1) 63.56%);
        --button-gradient-8:linear-gradient(110.42deg, rgba(25, 151, 222, 0.1) 29.2%, rgba(168, 85, 247, 0.1) 63.56%);
        --button-gradient-9:linear-gradient(110.42deg, rgba(226, 195, 33, 0.1) 29.2%, rgba(247, 104, 85, 0.1) 63.56%);
        --button-gradient-10: linear-gradient(110.42deg, rgba(235, 87, 87, 0.1) 29.2%, rgba(189, 68, 166, 0.1) 53.82%, rgba(247, 85, 143, 0.1) 63.56%);
        --button-gradient-11:linear-gradient(110.42deg, rgba(25, 151, 222, 0.1) 29.2%, rgba(168, 85, 247, 0.1) 63.56%);
        --button-gradient-12:linear-gradient(110.42deg, rgba(226, 195, 33, 0.1) 29.2%, rgba(247, 104, 85, 0.1) 63.56%);
        --button-gradient-13:linear-gradient(110.42deg, rgba(226, 195, 33, 0.1) 29.2%, rgba(99, 3, 255, 0.1) 63.56%);
        --button-gradient-14:linear-gradient(110.42deg, rgba(41, 25, 222, 0.1) 29.2%, rgba(235, 87, 87, 0.1) 63.56%);
        --nav-width: 322px;
        --font-size: 18px;
        --font-size-2: 20px;
        --font-size-3: 30px;
        --border-radius-md:12px;
        --border-radius-md-2:15px;
        --border-radius-sm: 8px;
        --shadow-1: 4px 4px 84px rgba(16, 10, 86, 0.04);
        --shadow-2: box-shadow: 0px 48px 77px rgba(8, 18, 69, 0.07);
        --icon-default-size: 1.4rem;
        --trans: all .4s ease-in-out;
    }

    .light-theme{
        --color-background: #FBFBFD;
        --color-gradient-1:linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%);
        --color-green-dark: #27AE60;
        --color-green-light: #6BBE92;
        --color-primary: #0D0D0D;
        --color-grey-0: #f8f8f8;
        --color-grey-1: #dbe1e8;
        --color-grey-2: #b2becd;
        --color-grey-3: #6c7983;
        --color-grey-4: #454e56;
        --color-grey-5: #2a2e35;
        --color-grey-6: #12181b;
        --color-white: #fff;
        
    }

    body {
        background: var(--color-background);
        min-height: 100vh;
        font-size: var(--font-size);
    }

    .gradient-text-1{
        background: var(--color-gradient-1);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        color: transparent;
    }
    a{
        text-decoration: none;
        color: var(--color-grey-3);
        font-family: inherit;
        font-weight: 500;
        font-size: var(--font-size);
    }

    i{
        display: flex;
        font-size: var(--icon-default-size);
        color: var(--color-grey-3);
    }
    button{
        outline: none;
        border: none;
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
    }

    .MainContent{
        width: calc(100% - var(--nav-width));
        margin-left: var(--nav-width);
        min-height: 100vh;
        padding: 2rem 3rem;
    }

    input{
        outline: none;
        border: none;
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
    }
    

    .btn-submit{
        width: 100%;
        margin-top: 2rem;
        padding: 1rem 2rem;
        border-radius: var(--border-radius-sm);
        background: var(--color-gradient-1);
        color: var(--color-white);
    }
`;

export default GlobalStyles;