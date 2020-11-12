import React from 'react';
import { Container, Card, Circulo, Select, Divisao, CardBody } from './styles';
import { useTeams } from '../../contexts/contextTeams';
import Sigla from '../../utils/sigla'

const PickedPlayer: React.FC = () => {
    const { mostPickedPlayer } = useTeams();

    return (
        <Container>
            <Card>
                <CardBody>
                    <div className="line" />
                    <div className="circle" />
                    <div className="select1">
                        <div className="sigla">
                            {Sigla(mostPickedPlayer.PlayerMaior?.name)}
                        </div>
                        <div className="percentage">
                            {mostPickedPlayer.PlayerMaior?.media && mostPickedPlayer.PlayerMaior?.media.toFixed(0) + '%'}
                        </div>
                    </div>
                    <div className="select2">
                        <div className="sigla">
                            {Sigla(mostPickedPlayer.PlayerMenor?.name)}
                        </div>
                        <div className="percentage">
                            {mostPickedPlayer.PlayerMenor?.media && mostPickedPlayer.PlayerMenor?.media.toFixed(0) + '%'}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Container>
    )
};

export default PickedPlayer;
