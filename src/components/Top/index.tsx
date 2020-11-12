import React  from 'react';

import { Container, Card, CardHeader, CardBody, ContainerList, CardList } from './styles';
import { useTeams } from '../../contexts/contextTeams'

interface Team {
    name: string;
    description: string;
    point: number;
}

const Top5: React.FC = () => {
    const { mediaPlayers } = useTeams();

    return (
        <Container>
            <Card>
                <CardHeader>
                    <h2>Top 5</h2>
                </CardHeader>
                <CardBody>

                    <div>
                        <h4>Highest avg age</h4>
                        <ContainerList>
                            {mediaPlayers.acimaMediaTimes.sort(function (a, b) {
                                return b.media - a.media
                            }).slice(0, 5).map(p => (
                                <CardList>
                                    <p>{p.name}</p>
                                    <p>{p.media.toFixed(1)}</p>
                                </CardList>
                            ))}
                        </ContainerList>
                    </div>

                    <div>
                        <h4>Lowest avg age</h4>
                        <ContainerList>
                            {mediaPlayers.abaixoMediaTimes.sort(function (a, b) {
                                return b.media - a.media
                            }).slice(0, 5).map(p => (
                                <CardList>
                                    <p>{p.name}</p>
                                    <p>{p.media.toFixed(1)}</p>
                                </CardList>
                            ))}
                        </ContainerList>
                    </div>

                </CardBody>
            </Card>
        </Container>
    )
};

export default Top5;