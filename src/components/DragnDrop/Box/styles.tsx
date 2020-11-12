import styled from 'styled-components';

export const Card = styled.div`
    background: linear-gradient(10deg,  #e7e7e7, #fff);
    width: 100%;
    height: 55px;
    margin-bottom: 8px;
    border-radius: 4px;
    border: 1px dashed #ccc;
    padding: 12px;
    justify-content: space-between;

`;

export const Line = styled.div`
    display: flex;
    justify-content: space-between;
    
    &:last-child {
        margin-top: 4px;
    }
`

export const Title = styled.div`
    font-weight: bold;
    color: #4A4A4A;
    font-size: 12px;
    display: flex;

    p {
        color: #CF3365;
        font-size: 12px;
        font-weight: normal;
        margin-left: 2px;
    }
`
