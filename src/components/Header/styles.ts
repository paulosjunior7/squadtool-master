import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(-20deg,  #8B1F6E, #BF0E4F);
    padding: 0 30px;
    display: flex;
    justify-content: 'center';
    align-items: 'center';

    width: 100%;
    display: flex;

   
`;

export const Content = styled.div`
    width: 100%;
    //max-width: 1350px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    
    nav {
        display:  flex;
        align-items: center;

        img {
            width: 110px;
            height: 60px;
            margin-right: 10px;
        }

        a {
           color: #fff;
           font-weight: bold;
        }
        
        aside {
            display: flex;
            align-items: center;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 10px;
    
    div {
        text-align: right;
        margin-right: 10px;
        margin-top: 15px;

        a {
            font-size: 14px;
            color: #fff;
        }
    }

    img {
            padding: 8px;
            width: 50px;
            height: 50px;
    }
    @media (max-width: 532px) {
        font-size: 8px;
    }   

`;

