import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any[] = [
        {
          name: 'Rafael Nadal',
          rank: 1,
          country: 'Španija'
        },
        {
          name: 'Novak Đoković',
          rank: 6,
          country: 'Srbija'
        },
        {
          name: 'Laslo Đere',
          rank: 89,
          country: 'Srbija'
        },
        {
          name: 'Rodžer Federer',
          rank: 2,
          country: 'Švajcarska'
        },
        {
          name: 'Stan Vavrinka',
          rank: 101,
          country: 'Švajcarska'
        }
      ];

  constructor() { }

  ngOnInit() {
  }

  getColor(country) {
    switch (country) {
      case 'Srbija': return 'blue';
      case 'Švajcarska': return 'red';
      default: return 'green';
    }
  }
}
