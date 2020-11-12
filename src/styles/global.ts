import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        color: '#000';
        background-color: #F7F3F7;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button , textarea {
        font: 14px 'Roboto' , sans-serif;
    }

    #root {
        margin: 0 auto;
        width: 100%;
        height: 100vh;
      //  padding: 40px 20px;
        @media (max-width: 768px) {
            height: 100%;
        }

        @media (max-width: 630px) {
            height: 100%;
        }

        @media (max-width: 540px) {
            height: 100%;
        }

        @media (max-width: 448px) {
            height: 100%;
        }

        @media (max-width: 389px) {
            height: 100%;
        }
        
        
    }

    
`;