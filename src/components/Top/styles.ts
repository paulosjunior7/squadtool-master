import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px 50px 0 50px ;

    @media (max-width: 502px) {
        width: 80%;
    } 

    @media (max-width: 498px) {
        width: 60%;
    } 

    @media (max-width: 368px) {
        width: 60%;
        margin-left: 0px;
    } 

    @media (max-width: 372px) {
        width: 50%;
        margin-left: 0px;
    } 
`;

export const Card = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    border-radius: 15px;
`;

export const CardHeader = styled.div`
    display: flex;
    width: 100%;
    height: 70px;

    color: #7D5DA5;
    font-size: 12px;
    font-weight: 400;
    border-bottom: 1px solid #ccc;
    align-items: center;
    justify-content: space-between;
    padding-left: 28px;
    padding-right: 28px;

    h2 {

    }

    button {
        width: 35px;
        height: 35px;
        border-radius: 10px;
        padding: 6px;
        border: 0;
        background: linear-gradient(-25deg,  #8B1F6E, #BF0E4F);
        box-shadow: 0 0 5px #7E3384;
    }
`;

export const CardBody = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr ));
    align-self: center;
    padding: 20px;  
    justify-items: stretch;
    align-items: stretch;

    a {
        display :flex;
        text-align: left;
        justify-content: start;
        margin-bottom: 8px;
        font-size: 13px;
        font-weight: bold;
    }

    div {
        h4 {
            color: #4D4E4D  ;
            margin-left: 7px;
        }
        
    }
`;

export const ContainerList = styled.div`
    padding: 32px;
    margin-top: 8px;
    background-color: #E9E3E9;
 
    height : 245px;
    border-radius: 4px;
    padding: 4px 4px;

    

    @media (max-width: 630px) {
            margin-top: 12px;
        }

    @media (max-width: 798px) {
            margin-right: 12px;
    }
`;

export const CardList = styled.div`
    display: flex;  
    justify-content: space-between;            
    width: 100%;
    height: 44px;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 4px;
    font-size: 12px;
    align-items: center;
    
    padding-left: 10px;
    padding-right: 10px;

    &:last-child {
        margin-bottom: 1px;
    }

    p {
        &:last-child {
            font-weight: bold;
        }
    }

    &:hover {
        border: 2px solid #BF0E4F;
    }
`;

