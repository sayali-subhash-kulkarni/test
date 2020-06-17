import {Http} from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()

export class HttpService{
    constructor(private http: Http){}
    get(url){
        console.log(url);
        return this.http.request(url)
    }

}