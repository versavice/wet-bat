import axios from 'axios';

export class Api {

    static getList(url: string): Promise<any[]> {
        return axios.get(url).then((response) => response.data[0]);
    }
    static get(url: string): Promise<any> {
        return axios.get(url).then((response) => response.data[0]);
    }
}
