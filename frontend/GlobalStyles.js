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
        --color-background-light: #F7FAFC;
        --color-background-2: rgba(0,0,0, 0.5);
        --color-primary-2: #7263F3;
        --color-gradient-1:linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%);
        --color-gradient-2:linear-gradient(11.42deg, #CF57A3 29.2%, #4731B6 63.56%);
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
        --text-gradient-1:linear-gradient(110.42deg, #6BBE92 29.2%, #EB5757 63.56%);
        --text-gradient-2:linear-gradient(110.42deg, #4731B6 29.2%, #037FFF 63.56%);
        --text-gradient-3:linear-gradient(110.42deg, #EE7D2C 29.2%, #F56692 63.56%);
        --text-gradient-4:linear-gradient(110.42deg, #3196B6 29.2%, #FF037C 63.56%);
        --text-gradient-5:linear-gradient(110.42deg, #A855F7 29.2%, #FF037C 63.56%);
        --text-gradient-6:linear-gradient(110.42deg, #037FFF 29.2%, #CF57A3 63.56%);
        --text-gradient-7:linear-gradient(110.42deg, #F2994A 29.2%, #57CF71 63.56%);
        --text-gradient-8:linear-gradient(110.42deg, #4731B6 29.2%, #F56692 63.56%);
        --text-gradient-9:linear-gradient(110.42deg, #4731B6 29.2%, #037FFF 63.56%);
        --text-gradient-10:linear-gradient(110.42deg, #E2C321 29.2%, #FF5E03 63.56%);
        --nav-width: 322px;
        --max-width: 985px;
        --header-height: 10vh;
        --tags-width: 460px;
        --form-width: 500px;
        --font-size: 18px;
        --font-size-2: 20px;
        --font-size-3: 30px;
        --border-radius-md:12px;
        --border-radius-sm: 8px;
        --border-radius-lg:30px;
        --shadow-1: 4px 4px 84px rgba(16, 10, 86, 0.04);
        --shadow-2: 0px 48px 77px rgba(8, 18, 69, 0.07);
        --shadow-3: 0px 48px 77px rgba(8, 18, 69, 0.07);;
        --shadow-7: 0px 48px 77px rgba(8, 18, 69, 0.16);;
        --shadow-5: 0px 4px 0px rgba(0, 0, 0, 0.15);
        --shadow-6: 0px 2px 0px rgba(0, 0, 0, 0.15);
        --icon-default-size: 1.4rem;
        --trans: all .3s ease-in-out;
        --trans-quick: all .08s ease-in-out;
        --pad-lr-2:0 2rem;
        --color-primary: #7263F3;
        --snippet-bg: #313340;
    }

    .light-theme{
        --color-background: #FBFBFD;
        --color-background-2: rgba(0,0,0, 0.5);
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
        @media screen and (max-width: 1537px) {
            zoom: 0.9;
        }
    }
    body::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    body::-webkit-scrollbar-track {
        background: #282c34;
    }

    body::-webkit-scrollbar-thumb {
        background: var(--color-gradient-1);
        border-radius: var(--border-radius-md);
    }

    body::-webkit-scrollbar-thumb:hover {
        background: var(--color-gradient-2);
    }

    .active{
        background: var(--color-gradient-1);
        transition: var(---trans);
        color: var(--color-white);
        &::before{
            display: none;
        }
        i{
            color: var(--color-white);
            transition: var(---trans);
        }
        a{
            color: var(--color-white) !important;
            transition: var(--trans);
        }
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
    .gradient-text-2{
        background-clip: text;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text !important;
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
        margin-left: var(--nav-width);
        min-height: 100vh;
        padding: 2rem 3rem;
        margin-top: 10vh;
        border-radius: 11px 11px 0px 0px;
        background-color: var(--color-background);
        transition: var(--trans);
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
        background: var(--color-gradient-2);
        color: var(--color-white);
        position: relative;
        transition: var(--trans);
        position: relative;
        span{
            position: relative;
            z-index:6 ;

        }
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--color-gradient-1);
            transform: scaleY(0);
            z-index: 0;
            transition: all .4s ease-in-out;
            cursor: pointer;
            border-radius: var(--border-radius-sm);
        }
        &:hover{
            cursor: pointer;
            
            &::before{
                transform: scaleY(1);
            }
        }
    }

    .toggle-nav{
        transform: translateX(-100%);
        transition: var(--trans);
    }
    .remove-margin-left{
        margin-left: 0;
        transition: var(--trans);
    }

    pre::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    /* Track */
    pre::-webkit-scrollbar-track {
        background: #282c34;
        border-top-right-radius: var(--border-radius-md);
        border-bottom-right-radius: var(--border-radius-md);
    }

    /* Handle */
    pre::-webkit-scrollbar-thumb {
        background: linear-gradient(110.42deg, rgba(207, 87, 163, 0.63) 29.2%, rgba(71, 49, 182, 0.63) 63.56%);
        border-radius: var(--border-radius-md);
    }

    /* Handle on hover */
    pre::-webkit-scrollbar-thumb:hover {
        background: #888;
        background: var(--color-gradient-1);
    }

    .md-heading{
        position: relative;
        padding: 1rem 0;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--color-grey-1);
        }
    }

    .checkTitle{
        position: absolute;
        top: 32px;
        left: 0;
        width: 100%;
        padding: 0.7rem 1rem;
        background: #cc3300;
        border-radius: var(--border-radius-sm); 
        color: #fff;
        transition: var(--trans);
    }

    .code-body{
        position: relative;
    }
    .checkCode{
        position: absolute;
        top: 0;
        height: 100% ;
        left: 0;
        width: 100%;
        padding: 0.7rem 1rem;
        background: #cc3300;
        border-radius: var(--border-radius-sm); 
        color: #fff;
        font-size: 1.3rem ;
        transition: var(--trans);
    }

    .load-more{
        text-align:center ;
        
        .l-btn{
            box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.03);
            display: inline-block;
        }
    }

    .loading{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 200;
        .lds-facebook {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
        }
        .lds-facebook div {
            display: inline-block;
            position: absolute;
            left: 8px;
            width: 16px;
            background: var(--color-gradient-2);
            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
            box-shadow: var(--shadow-2);
        }
        .lds-facebook div:nth-child(1) {
            left: 8px;
            animation-delay: -0.24s;
        }
        .lds-facebook div:nth-child(2) {
            left: 32px;
            animation-delay: -0.12s;
        }
        .lds-facebook div:nth-child(3) {
            left: 56px;
            animation-delay: 0;
        }
        @keyframes lds-facebook {
        0% {
            top: 8px;
            height: 64px;
        }
        50%, 100% {
            top: 24px;
            height: 32px;
        }
    }
}
`;

export default GlobalStyles;