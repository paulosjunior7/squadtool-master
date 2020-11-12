import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v2', headers: {'X-RapidAPI-Key' : '1e1d24249fmshe7c0ca973f14a44p1c3debjsnd99dab4a4bae'}
});

export default api;