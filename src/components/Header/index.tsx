import React from 'react';
import { Container , Content , Profile } from  './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const Navbar:React.FC = () => (
    <Container>
        <Content>
            <nav>
                <Link to="/">
                    <img src="https://www.venturus.org.br/wp-content/themes/vent-theme/assets/css/../img/logo-new.svg" alt="teste" />
                </Link>
                <a>Squad Management Tool</a>
            </nav>

            <aside>
                <Profile>
                    <div>
                        <a>Paulo Soares</a>
                    </div>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="avatar"/>
                </Profile>
            </aside>
        </Content>
    </Container>
)

export default Navbar;