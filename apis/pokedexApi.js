import axios from 'axios'

let url = 'https://pokeapi.co/api/v2';

const pokeDex = axios.create({
    baseURL: url
})

export default pokeDex;