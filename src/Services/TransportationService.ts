import axios, { AxiosResponse } from 'axios';
import { Transportation } from "../Models/Transportation/Transportation";
const apiUrl = "http://localhost:3001/";


export class TransportationService {

    static getTransportations(): Promise<AxiosResponse<Transportation[]>> {
        var url = apiUrl + "getTransportations";
        return axios.get(url);
    }
}
