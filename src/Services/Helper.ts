import axios from 'axios';

export class Api {

    static get(url: string): Promise<any[]> {
        return axios.get(url).then((response) => response.data[0]);
    }
}
