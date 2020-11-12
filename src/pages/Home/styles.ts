import styled from 'styled-components';

export const Container = styled.div `
 //   display: flex;
  //  flex-direction: row;
    width: 100%;
    height: 91vh;
 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-gap: 20px;
    padding: 50px;
`;

export const SectionOne = styled.div `
    width: 100%;
    min-width: 50%;
`
    export const SectionTwo = styled.div `
    width: 100%;
    min-width: 50%;
`;