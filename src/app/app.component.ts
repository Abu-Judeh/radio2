import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  source:string="";
    title = 'Radio';
  citeis=[
      {name:"hebron",radios:[{radioName:"hr",src:"https://streaming.zaytonatube.com/test2.aac"}
      ,{radioName:"hebron",src:"https://streaming.zaytonatube.com/test2.aac"}]},

      {name:"jeruselm",radios:[{radioName:"jer"},{radioName:"jer2"}]}
  ];

  giveSrc(event: any){
   this.source = event.target.value;
  }

}
