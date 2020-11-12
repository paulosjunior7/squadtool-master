import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
    Container, Card, CardHeader, CardBody, Button,
    TextArea, Input, Radio, Tags, Circulo, CampField, Camp, Scroll, PlayerList, SessionCamp, SessionPlayers, Title, SessionDetail
} from './styles';
import TagsInput from 'react-tagsinput';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Dustbin } from '../../components/DragnDrop/Dustibin';
import { Box } from '../../components/DragnDrop/Box/Box';

import { useTeams } from '../../contexts/contextTeams';
import Player from '../../models/Player';
import Teams from '../../models/Teams'
import Sigla from '../../utils/sigla';

import { useParams } from 'react-router-dom';

interface Params {
    id: string;
}

interface data {
    players: Player;
}

interface POSICAO {
    player: Player;
    posicao: [number, number]
}

interface Props {
    team: Teams;
}

const CreateTeam = ({ match }: any) => {
    const { teams, addTeam, updateTeam, players } = useTeams();
    const [team, setTeam] = useState<Teams>({} as Teams);
    const [tags, setTags] = useState<string[]>([]);
    const [search, setSearch] = useState('');
    const [focus, setFocus] = useState<boolean>(false);


    const [selectedOption, setSelectedOption] = useState('3 - 4 - 3');
    const [posicoes, setPosicoes] = useState<POSICAO[]>([]);
    const valor = selectedOption.split(" - ").reverse();
    const { id } = useParams<Params>();

    useEffect(() => {
        async function loadTeams() {
            if (id) {
                setTeam(teams[Number(id)])
                setSelectedOption(teams[Number(id)].formacao)
                setPosicoes(teams[Number(id)].posicoes);
                setTags(teams[Number(id)].tags);
            }
        }

        loadTeams();

    }, [id])


    const options = [
        "3 - 4 - 3",
        "3 - 5 - 2",
        "4 - 2 - 3 - 1",
        "4 - 3 - 1 - 1",
        "4 - 3 - 2",
        "4 - 4 - 2",
        "4 - 5 - 1",
        "5 - 4 - 1"
    ];

    function onChange(player: Player, posicao: [number, number]): void {
        setPosicoes([...posicoes, { player, posicao }])
        setSelectedOption(selectedOption);
    }


    const filteredPlayers = players.filter((player: Player) => {
        const p = posicoes.filter(a => a.player.player_name == player.player_name);
        return (
            player.player_name.toUpperCase().includes(search.toUpperCase()) && p.length == 0
        )
    });


    function IncludePlayer(quant: String, posicaoX: number) {
        let retorno = [];

        for (let posicaoY = 0; posicaoY < Number(quant); posicaoY++) {

            const pos: POSICAO[] = posicoes.filter(p => p.posicao.toString() === [posicaoX, posicaoY].toString());

            retorno.push(
                <Dustbin
                    player={pos[0]?.player}
                    posicaoX={posicaoX}
                    posicaoY={posicaoY}
                    habilitado={pos[0]?.posicao == undefined}  // se a primeira posicao é vazia, não existe nenhum
                    sigla={pos[0] ? Sigla(pos[0].player.player_name.toString()) : ''}
                />
            );
        }

        return retorno;
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const formacao = selectedOption.toString();
        const Objeto = { ...team, tags, formacao, posicoes };
        setTeam(Objeto);

        if (!id) {
            addTeam(Objeto);
            alert('Gravado!');
        } else {
            updateTeam(Objeto, Number(id));
            alert('Alterado!');
        }
    }

    function handleSelectedOption(event: ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        setPosicoes([]);
        setSelectedOption(value);
    }

    function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

         setTeam({ ...team, [name]: value });
        
    }

    function handleChangeTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setTeam({ ...team, [name]: value });
    }

    function handleChangeTags(value: string) {
        const name = value;
        setTeam({ ...team, [name]: value });
    }

    const onChangeRadio = (event: any) => {
        event.persist()
        const { name, value } = event.target

        setTeam({ ...team, [name]: value });
    }

    function onFocusChange() {
        console.log(focus);
        setFocus(!focus);
    }


    return (
        <Container>
            <Card>
                <CardHeader>
                    <h2>Create your team</h2>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit}>

                        <Title>
                            <h2 >TEAM INFORMATION</h2>
                        </Title>

                        <SessionDetail>
                            <section>
                                <Input>
                                    <label>Team name</label>
                                    <input
                                        type="text"
                                        id="nameTeam"
                                        name="nameTeam"
                                        value={team.nameTeam}
                                        onChange={handleChangeInput}
                                        autoComplete="off"
                                        required
                                    />
                                </Input>

                                <TextArea>
                                    <label>Description</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={5}
                                        cols={50}
                                        value={team.description}
                                        onChange={handleChangeTextArea}
                                        autoComplete="off"
                                        required
                                    />
                                </TextArea>
                            </section>

                            <section>
                                <Input>
                                    <label>Team website</label>
                                    <input
                                        type="url"
                                        id="teamWebsite"
                                        name="teamWebsite"
                                        value={team.teamWebsite}
                                        onChange={handleChangeInput}
                                        placeholder="http://myteam.com"
                                        autoComplete="off"
                                        required
                                    />
                                </Input>

                                <label>Team website</label>
                                <Radio>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Real"
                                            name="teamType"
                                            id="teamType"
                                            checked={team.teamType == 'Real'}
                                            onChange={onChangeRadio}
                                            required
                                        />
                                    Real
                                </label>

                                    <label>
                                        <input
                                            type="radio"
                                            value="Fantasy"
                                            name="teamType"
                                            id="teamType"
                                            checked={team.teamType == 'Fantasy'}
                                            onChange={onChangeRadio}
                                            required
                                        />
                                    Fantasy
                                </label>
                                </Radio>
                                <label>Team website</label>
                                <Tags>
                                    <TagsInput  value={tags} onChange={setTags} />
                                </Tags>
                            </section>
                        </SessionDetail>



                        <Title>
                            <h2 >CONFIGURE SQUAD</h2>
                        </Title>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: '100%'
                        }}>

                            <DndProvider backend={HTML5Backend}>
                                <SessionCamp>
                                    <label>Formation</label>
                                    <select
                                        name="formacao"
                                        onChange={handleSelectedOption}
                                        value={selectedOption}>
                                        {options.map(p => (
                                            <option value={p}>{p}</option>
                                        ))

                                        }
                                    </select>
                                    <Camp>
                                        <div className="divisao" />
                                        <Circulo />
                                        {valor.map((p: String, index) => (

                                            <CampField>
                                                { IncludePlayer(p, index).map(a => a)}
                                            </CampField>
                                        ))}
                                    </Camp>
                                    <Button>
                                        <button type="submit">Save</button>
                                    </Button>
                                </SessionCamp>
                                <SessionPlayers>
                                    <label>Search Players</label>
                                    <Input>
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            name="search"
                                            onChange={e => setSearch(e.target.value)}
                                        />
                                    </Input>
                                    <PlayerList>
                                        <Scroll>
                                            <ul>
                                                {
                                                    filteredPlayers.map((player: Player) => (
                                                        <li key={String(player.player_id)} style={{ listStyle: 'none' }}>
                                                            <Box player={player} onChange={onChange} />
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </Scroll>
                                    </PlayerList>
                                </SessionPlayers>
                            </DndProvider>
                        </div>

                    </form>
                </CardBody>
            </Card>
        </Container>
    );
}

export default CreateTeam;