import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
    margin: 50px;
    display: flex;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));

    
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
        cursor: pointer;
    }
`;

export const CardBody = styled.div`
    flex-direction: column;     
    align-items: center;        
    padding: 18px 18px;  
`;

export const Table = styled.div`
    display: block;
    font-size: 13px;
    font-weight: bold;

    thead {
        
        tr {
            height: 24px;
            
            th {
                cursor: pointer;
                border-right: 1px solid #ccc;

                &:first-child {
                    align-items: center;
                    text-align: start;
                    padding: 8px;
                    width: 20vw;
                    height: 32px;
                }
                &:last-child {
                    align-items: center;
                    text-align: start;
                    padding: 8px;
                    width: 50vw;
                    height: 32px;
                }
            }
        }

    }

    tbody {
      
        tr {
             align-items: center;
             padding-left: 18px;
             height: 40px;
             border-bottom: 1px solid #f3f1f2;
         
             &:hover {
                 border-radius: 12px;
                 background-color: #F7EEF7;
                 height: 42px;
                 border: 1px solid #eee;
                 color: #BF0E4F;
                 font-weight: bold;
            }
        }
        
        td {
            align-items: center;
            text-align: start;
            padding: 8px;
            height: 35px; 

                &:last-child {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    text-align: center;
                    justify-content: space-between;
                    height: 40px;
                }

                div {
                    width: 55px;
                    display: flex;
                    justify-content: space-between;

                    .tooltip {
                    position: relative;
                    display: inline-block;
                    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
                    }

                    /* Tooltip text */
                    .tooltip .tooltiptext {
                    visibility: hidden;
                    width: 120px;
                    background-color: black;
                    color: #fff;
                    text-align: center;
                    padding: 5px 0;
                    border-radius: 6px;
                    
                    /* Position the tooltip text - see examples below! */
                    position: absolute;
                    z-index: 1;
                    }

                    /* Show the tooltip text when you mouse over the tooltip container */
                    .tooltip:hover .tooltiptext {
                    visibility: visible;
                    }
                }   
        } 
    }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 460px;
  overflow: hidden;
`;

