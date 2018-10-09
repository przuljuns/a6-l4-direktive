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
          rank: 1
        },
        {
          name: 'Novak Đoković',
          rank: 6
        },
        {
          name: 'Laslo Đere',
          rank: 89
        },
        {
          name: 'Rodžer Federer',
          rank: 2
        },
        {
          name: 'Stan Vavrinka',
          rank: 101
        }
      ];

  constructor() { }

  ngOnInit() {
  }

}
