import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';
import Teams from '../models/Teams';
import Player from '../models/Player';
import Posicao from '../models/Position';
import api from '../services/api';
import { time } from 'console';

interface TeamsContextData {
    teams: Teams[];
    players: Player[];
    addTeam(team: Teams): void;
    updateTeam(team: Teams, index: number): void;
    deleteTeam(te: Teams): void;
    mediaPlayers: MediaTime;
    mostPickedPlayer: MediaPicked;
}

interface data {
    api: {
        results: number,
        players: Player[]
    }
}

interface TopMedia {
    name: string,
    media: number
}

interface MediaTime {
    acimaMediaTimes: TopMedia[],
    abaixoMediaTimes: TopMedia[]
}

interface MediaPicked {
    PlayerMaior: TopMedia,
    PlayerMenor: TopMedia
}

const TeamsContext = createContext<TeamsContextData>({} as TeamsContextData);

export const TeamsProvider: React.FC = ({ children }) => {
    const [teams, setTeams] = useState<Teams[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);
    const [mediaPlayers, SetMediaPlayers] = useState<MediaTime>({
        abaixoMediaTimes: [],
        acimaMediaTimes: []
    });

    const [mostPickedPlayer, setMostPickedPlayer] = useState<MediaPicked>({} as MediaPicked);

    useEffect(() => {
        async function loadTeams() {

            const jogador = await api.get<data>('players/search/messi');
            if (jogador.data.api.players) {
                setPlayers(jogador.data.api.players);
            }
        }
        if (players.length == 0) {
            loadTeams();
        }
    }, []);

    useEffect(() => {
        topFive();
    }, [teams])

    function addTeam(te: Teams) {
        setTeams([...teams, te])
    }

    function updateTeam(te: Teams, index: number) {
        const tem = teams;
        tem[index] = te;
        setTeams([...tem])
    }

    function deleteTeam(te: Teams) {
        const valor = teams.filter(t => t !== te);
        setTeams(valor)
    }


    function topFive() {
        let total: number = 0;
        let qtdJogadores: number = 0;
        let timesMedia: TopMedia[] = [];

        let somaQtdPlayer: {
            name: string,
            quantidade: number
        }[] = [];

        teams.forEach((teams: Teams) => {
            let sumIdade: number = 0;

            teams.posicoes.forEach((posicoes: Posicao) => {
                total += posicoes.player.age;
                sumIdade += posicoes.player.age;
                qtdJogadores += 1;

                const filtro = somaQtdPlayer.findIndex(p => p.name == posicoes.player.player_name);

                if (filtro == -1) {
                    somaQtdPlayer.push({ name: posicoes.player.player_name, quantidade: 1 })
                } else {
                    somaQtdPlayer[filtro] = { name: posicoes.player.player_name, quantidade: somaQtdPlayer[filtro].quantidade + 1 }
                }
            })

            timesMedia.push({
                name: teams.description,
                media: sumIdade / teams.posicoes.length
            })
        })

        let mediaIdade = total / qtdJogadores;

        let orderPlayer = somaQtdPlayer.sort(function (a, b) {
            return (a.quantidade - b.quantidade)
        })

        setMostPickedPlayer({
            PlayerMenor: {
                name: orderPlayer[orderPlayer.length - 1]?.name,
                media: orderPlayer[orderPlayer.length - 1] ? ((orderPlayer[orderPlayer.length - 1]?.quantidade / qtdJogadores) * 100) : 0
            },
            PlayerMaior: {
                name: orderPlayer[0]?.name,
                media: orderPlayer[0] ? ((orderPlayer[0]?.quantidade / qtdJogadores) * 100) : 0
            }
        })

        SetMediaPlayers({
            acimaMediaTimes: timesMedia.filter(t => t.media >= mediaIdade),
            abaixoMediaTimes: timesMedia.filter(t => t.media < mediaIdade)
        });
    }


    return (
        <TeamsContext.Provider value={{ teams, players, addTeam, updateTeam, deleteTeam, mediaPlayers, mostPickedPlayer }}>
            {children}
        </TeamsContext.Provider>
    );
}

export function useTeams() {
    const context = useContext(TeamsContext);

    return context;
};