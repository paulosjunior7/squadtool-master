import Player from './Player';
import Posicao from './Position';

export default interface Teams {
    nameTeam: string;
    description: string;
    teamWebsite: string;
    teamType: string;
    tags : string[];
    formacao: string;
    posicoes: Posicao[]
}

