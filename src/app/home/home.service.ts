import { HttpService } from "../common/http.service";
import { Apiurl } from "../common/api.constant";
import { Injectable } from "@angular/core";

@Injectable()
export class HomeService {
    constructor(private httpService: HttpService) {}

    getHttPText(successCB:any, errorCB:any) {
        this.httpService.get(`${Apiurl.getText}`).subscribe((response:any) => {
            successCB(response._body);
        }, (error:any) => {
          if(error) {
            errorCB(JSON.parse(error._body));
          } else {
            errorCB(null);
          }
        })
      }
    
      getHttpTable(successCB:any, errorCB:any) {
        this.httpService.get(`${Apiurl.getTable}`).subscribe((response:any) => {
          successCB(JSON.parse(response._body));
        },(error) => {
          errorCB(error);
        })
      }
}