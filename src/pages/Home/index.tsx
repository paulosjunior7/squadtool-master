import React from 'react';
import { Container, SectionOne , SectionTwo } from './styles';

import MyTeams from '../../components/MyTeams';
import Top5 from '../../components/Top';
import PickedPlayer from '../../components/pickedPlayer';


const Home: React.FC = () => {
    return (
        <Container >
            <SectionOne>
                <MyTeams />
            </SectionOne>
            <SectionTwo>
                <Top5 />
                <PickedPlayer />
            </SectionTwo>
        </Container>
    );
}

export default Home;