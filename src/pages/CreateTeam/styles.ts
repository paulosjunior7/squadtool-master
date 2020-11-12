import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
    max-width: 1024px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;


export const Card = styled.div`
    background-color: #FFFFFF;
    max-width: 1020px;
    min-width: 900px;
    //height: 720px;
    border-radius: 15px;
`;

export const CardHeader = styled.div`
    display: flex;
    height: 70px;
    color: #7D5DA5;
    font-size: 12px;
    font-weight: 400;
    border-bottom: 1px solid #E5E5E5;
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

    form {
        display: flex;              
        flex-direction: column;     
        padding: 18px 18px;  
        width: 100%;
        align-items: center;
    }

    h2 {
        font-weight: bold;
        font-size:12px;
        color: #A8A8A8;
        display : flex;
    }

   
   
`;


export const Input = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

        label {
            font-size: 12px;
            color: #BF0E4F; 
            font-weight: bold;
        }

        input {
            border: 1px solid #E5E5E5;
            border-radius: 4px;
            height: 28px;
            width: 300px;
            margin-top :6px;
            padding: 8px;
        }
`;

export const SessionDetail = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    section {
        padding: 12px;

        label {
            font-size: 12px;
            color: #6E6E6E; 
            font-weight: bold;
        }

    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-top: 12px;
`;

export const TextArea = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

        label {
            font-size: 12px;
            color: #BF0E4F; 
            font-weight: bold;
        }

        textarea {
            border: 1px solid #E5E5E5;
            border-radius: 4px;
            height: 28px;
            margin-top : 6px; 
            padding: 8px;
            max-height: 142px;
            max-width: 300px;
            width: 300px;
            height: 142px;
            resize: none;
        }
`;

export const Radio = styled.div`
    display: flex;
    margin-top: 12px;
    margin-bottom: 12px;

    input {
        margin-right: 10px;
    }

    label {
        font-size: 12px;
        color: #BF0E4F; 
        margin-right: 12px;
    }

    input[type=radio]:checked:after  + label 
    {
        color: #16B67F;
    }


`

export const Tags = styled.div`

    margin-top: 10px;   
    .react-tagsinput {
        background-color: #fff;
        border: 1px solid #E5E5E5;
        overflow: hidden;
        padding-left: 5px;
        padding-top: 5px;
        border-radius: 4px;
        width: 300px;
        height: 80px;
    }

    /* .react-tagsinput--focused {
        border-color: #C50341;
    } */

    .react-tagsinput-tag {
        background-color: #C50341   ;
        border-radius: 2px;
        border: 1px solid #C50341;
        color: #fff;
        display: inline-block;
        font-family: sans-serif;
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 5px;
        margin-right: 5px;
        padding: 5px;
        border-radius: 12px;
    }

    .react-tagsinput-remove {
        cursor: pointer;
        font-weight: bold;
    }

    .react-tagsinput-tag a::before {
        content: " ×";  
    }

    .react-tagsinput-input {
        background: transparent;
        border: 0;
        color: #777;
        font-family: sans-serif;
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 6px;
        margin-top: 1px;
        outline: none;
        padding: 5px;
        width: 80px;
    }

`

export const Camp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background : linear-gradient(180deg,  #AE3A7C, #802F80);
    width: 315px;
    height: 455px;
    margin-top:15px;
    border-radius: 4px;

    
    .divisao {
        width : 350px;
        height: 1px;
        background-color: #F7F3F7;
        display: flex;
        position: absolute;
        z-index: 999; 
    }
`;

export const Circulo = styled.div`
    width: 90px;
    height: 90px;
    border: 1px solid #F7F3F7;
    border-color: #F7F3F7;
    border-radius: 100%;
    position: absolute;
`;

export const ContainerPlayer = styled.div`
    display: flex;
    width: 55px;
    height: 55px;
    border-radius: 50px;
    background-color: #D09BBE;
    border : 1px dashed #fff;
    justify-content: center;
    align-items: center;
    margin-left: 18px;
    margin-right: 18px;
    z-index: 999999;
`

export const CampField = styled.div`
    
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-self: center;
    padding: 2px;

`

export const Scroll = styled(PerfectScrollbar)`
  max-height: 460px;
  overflow: hidden;
`;

export const PlayerList = styled.div`
    display: flex;
    justify-content: 'start';
    width: 300px;
    height: 410px;
    padding: 2px;
    flex-direction: column;
`;

export const SessionCamp = styled.div`
    margin-top: 12px;

    label {
        font-size: 12px;
        color: #6e6e6e;
        font-weight: bold;
        margin-right: 9px;
    }
`;

export const SessionPlayers = styled.div`
    margin-top: 12px;
    width: 275px;
    height: 430px;

    label {
        font-size: 12px;
        color: #6E6E6E;
        font-weight: bold;
        margin-right: 9px;
    }
`;

export const Button = styled.div`


    button {

        background-color : linear-gradient(180deg,  #AE3A7C, #802F80);
        background : linear-gradient(180deg,  #AE3A7C, #802F80);
        height: 35px;
        width: 315px;
        border-radius: 8px;
        border: 0;
        color: #fff;
        margin-top: 12px;
        font-weight: bold;

    }


`;


