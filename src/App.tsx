import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/Header';
import Footer from './components/Footer';
import { TeamsProvider } from './contexts/contextTeams'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <TeamsProvider>
        <BrowserRouter>
                <ToastContainer autoClose={3000} />
                <NavBar />
                <Routes />
                <Footer />
                <GlobalStyle />
        </BrowserRouter>
    </TeamsProvider>
);

export default App;
