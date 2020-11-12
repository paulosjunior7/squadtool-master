import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 50px 50px 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @media (max-width: 502px) {
        width: 80%;
    } 

    @media (max-width: 498px) {
        width: 60%;
    } 

    @media (max-width: 340px) {
        width: 50%;
        margin-left: 0px;
    } 

    @media (max-width: 372px) {
        width: 40%;
        margin-left: 0px;
    } 
`;

export const Card = styled.div`
    background-color: #ccc;
    background: linear-gradient( 0deg,  #6D3187, #B73D7C);
    width: 100%;
    height: 200px;
    border-radius: 15px;
    /* display: flex;
    height: 200px;
    max-height: 380px;
    
    border-radius: 15px;
    background-color: #FFFFFF;
    background: linear-gradient( 0deg,  #6D3187, #B73D7C);
    justify-content: center;
    align-items: center; */
`;

export const CardBody = styled.div`
    width: 100%;            
    padding: 25px 25px;  
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    a {
        display :flex;
        text-align: left;
        justify-content: start;
        margin-bottom: 8px;
        font-size: 13px;
        font-weight: bold;
    }

    .line {
        background-color: #fff;
        width: 1px;
        height: 200px;
        top: 0;
        position: absolute;
    }

    .circle {
        border: 1px solid #fff;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        position: absolute;
        bottom: -98px;
    }

    .title1 {
        top: 10;
        display: flex;
        margin-right: 70px;
    }

    
    .title2 {
        top: 10;
        display: flex;
        margin-left: 70px;
    }

    .select1 {
        width: 140px;
        height: 140px;
        border-radius: 100px;
        border: 3px dashed #A976BE;
        box-shadow: 0 0 5px #6A3088;
        position: absolute;
        margin-right: 325px;
        bottom: -120px;
        left: 35px;
        display: flex;
        align-items: center;
        justify-content: center;


        .sigla {
            font-size: 35px;
            font-weight: bold;
            color: #fff;
        }

        .percentage {
            font-size: 25px;
            font-weight: bold;
            color: #fff;
            margin-left: 12px;
        }
    }

    .select2 {
        width: 140px;
        height: 140px;
        border-radius: 100px;
        position: absolute;
        bottom: -120px;
        right: 35px;
        border: 2px solid #A976BE;
        box-shadow: 0 0 0px #6A3088;
        display: flex;
        align-items: center;
        justify-content: center;

        
        .sigla {
            font-size: 35px;
            font-weight: bold;
            color: #fff;
        
        }

        .percentage {
            font-size: 25px;
            font-weight: bold;
            color: #fff;
            margin-left: 12px;
        }
    }
`;

export const Divisao = styled.div`
    width : 1px;
    height: 200px;
    background-color: #fff;
`;

export const Circulo = styled.div`
    width: 90px;
    height: 90px;
    border: 1px solid #fff;
    border-color: #fff;
    border-radius: 100%;
    position: absolute;
`;

export const Select = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 100px;
    border: 3px dashed #A976BE;
    box-shadow: 0 0 5px #6A3088;

    position: fixed;
    margin-right: 325px;

    &:last-child {
        margin-right: -325px;
        border: 2px solid #A976BE;
        box-shadow: 0 0 0px #6A3088;
    }
`;


