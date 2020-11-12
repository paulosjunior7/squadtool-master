import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTeams } from '../../contexts/contextTeams';

import { Container, Card, CardHeader, CardBody, Table, Scroll } from './styles';
import { AiOutlinePlus } from 'react-icons/ai';
import Teams from '../../models/Teams';

import { MdModeEdit, MdShare, MdDelete } from 'react-icons/md';
import Player from '../../models/Player';


interface data {
    teams: Teams[];
}

const MyTeams: React.FC = () => {
    const { teams, deleteTeam  } = useTeams();
    const history = useHistory();

    function handleNewTeam() {
        history.push('/createteam');
    }

    function handleEditTeam(index: number) {
        history.push(`/createteam/${index}`);
    }

    function handleDeleteTeam(team: Teams) {

        if (window.confirm("Confirm delete?")) {
            deleteTeam(team);
        }
    }

   


return (
    <Container>
        <Card>
            <CardHeader>
                <h2>My teams</h2>
                <button onClick={handleNewTeam}>
                    <AiOutlinePlus size={23} color="#fff" />
                </button>

            </CardHeader>
            <CardBody>
                <Scroll style={{ height: "100vh" }}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                teams.map((teams: Teams, index) => (

                                    <tr key={teams.nameTeam}>
                                        <td>{teams.nameTeam}</td>
                                        <td>{teams.description}
                                            <div>
                                                <MdDelete size={14} color="#BF0E4F" onClick={() => handleDeleteTeam(teams)} />
                                                <MdShare size={14} color="#BF0E4F" />
                                                <MdModeEdit size={14} color="#BF0E4F" onClick={() => handleEditTeam(index)} />
                                            </div>

                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Scroll>

            </CardBody>
        </Card>
    </Container>
)
};

export default MyTeams;