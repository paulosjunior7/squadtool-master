import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/Header';
import Footer from './components/Footer';
import { TeamsProvider } from './contexts/contextTeams';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <TeamsProvider>
        <BrowserRouter>
                <NavBar />
                <Routes />
                <Footer />
                <GlobalStyle />
        </BrowserRouter>
    </TeamsProvider>
);

export default App;
