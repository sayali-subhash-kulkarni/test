import { Component, OnInit } from '@angular/core';
import { HttpService } from '../common/http.service';
import { Statement } from '@angular/compiler';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  
  renderedText:string;
  errorText:string;

  // renderTable 
  statements:Array<any>;


  ngOnInit() {
    // this.getText();
    this.getTable();
  }

  getText() {
    this.homeService.getHttPText((responseText) => {
      this.renderedText = responseText;
    }, (error) => {
      if(error && error.response && error.response.error == "Null Pointer Exception") {
        this.errorText = "Resource Not Available"
      }
    })
  }




  getTable() {
    this.homeService.getHttpTable((responseTable) => {
      if(responseTable && responseTable.length) {
        this.statements  = responseTable;
        console.log(this.statements);
      }
    }, (error) => {

    })
  }

  hasJsTag(tags) {
    return tags.findIndex(tag => tag =='JS') >=0;
  }

}
