import React from 'react';
import { Container } from  './styles';

const Footer:React.FC = () => (
    <Container>
        <div style={{ width: '100%' , height: '20px' , fontSize: '13px' , color: '#807D80' , display: 'flex', flexDirection: 'column' , justifyContent: 'center' , alignItems: 'center' }}>
            2020 - All rights reserved 
        </div>
    </Container>
)

export default Footer;