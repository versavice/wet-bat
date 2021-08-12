import axios, { AxiosResponse } from 'axios';
import { PendingQuoteListResult } from '../Models/Quote/PendingQuoteListResult';
import { Quote } from "../Models/Quote/Quote";
import { QuoteListResult } from '../Models/Quote/QuoteListResult';
import { Api } from './Helper';
const apiUrl = "http://localhost:3001/";


export class QuoteService {

    static getQuotes(): Promise<QuoteListResult[]> {
        var url = apiUrl + "getQuotes";
        return Api.get(url);
    }

    static getPendingQuotes(): Promise<PendingQuoteListResult[]> {
        var url = apiUrl + "getPendingQuotes";
        return Api.get(url);
    }
    
    static updateQuote(quote: Quote): Promise<AxiosResponse> {
        var url = apiUrl + "updateQuote";
        return axios.post(url, {
            quote
        });
    }
}
