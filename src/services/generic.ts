import axios, {AxiosError} from "axios";

function getInstance(){
    return axios.create({
        baseURL: 'https://pokeapi.co/api/v2',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function get(url: string): Promise<any>{
    try {
        const axios = getInstance()
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        if(error instanceof AxiosError)
            throw error.response   
        throw error     
    }
}