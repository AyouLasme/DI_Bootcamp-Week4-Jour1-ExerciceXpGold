import { Component, OnInit } from '@angular/core';
import { ApiTimeService } from './api-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ExerciceXpGold';
  dateHeure: Date = new Date()

  time: any;
  constructor( public timeService : ApiTimeService) {

   }
  ngOnInit(): void {
    this.time = this.timeService.getData();
  }


  jsonProduit = {
    nomProduit : 'Samsung A70',
    prixProduit : 300000
  }
}
