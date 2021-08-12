import axios, { AxiosResponse } from 'axios';
import { Location } from "../Models/Location/Location";
const apiUrl = "http://localhost:3001/";


export class LocationService {

    static getLocations(): Promise<AxiosResponse<Location[]>> {
        var url = apiUrl + "getLocations";
        return axios.get(url);
    }
}
