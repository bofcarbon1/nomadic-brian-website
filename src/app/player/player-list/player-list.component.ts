import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  selectedPlayer: Player | any;
  player!: Player | {};

  players = [
    {
      id: '0',
      name: 'Zack Moss',
      position: 'RB',
      plink: 'https://www.pro-football-reference.com/players/M/MossZa00.htm',
    },
    {
      id: '1',
      name: 'DeForest Buckner',
      position: 'DT',
      plink: 'https://www.pro-football-reference.com/players/B/BuckDe00.htm',
    },
    {
      id: '2',
      name: 'Grover Stewart',
      position: 'CB',
      plink: 'https://www.pro-football-reference.com/players/S/StewGr00.htm',
    },
  ];
  tops = [
    {
      id: '0',
      name: 'Zaire Franklin',
      position: 'RB',
      plink: 'https://www.pro-football-reference.com/players/F/FranZa00.htm',
    },
    {
      id: '1',
      name: 'Kwitty Paye',
      position: 'DE',
      plink: 'https://www.pro-football-reference.com/players/P/PayeKw00.htm',
    },
    {
      id: '2',
      name: 'Michael Pittman',
      position: 'WR',
      plink: 'https://www.pro-football-reference.com/players/P/PittMi01.htm',
    },
  ];
  rookies = [
    {
      id: '0',
      name: 'Anthony Richardson',
      position: 'QB',
      plink:
        'https://www.pro-football-reference.com/players/R/RichAn03.htm',
    },
    {
      id: '1',
      name: 'Josh Downs',
      position: 'WR',
      plink: 'https://www.pro-football-reference.com/players/D/DownJo00.htm',
    },
    {
      id: '2',
      name: 'Julius Brents',
      position: 'CB',
      plink:
        'https://www.pro-football-reference.com/players/B/BrenJu00.htm',
    },
  ];
  displayedColumns = ['Name', 'Position', 'Plink'];

  public imageObject: any;

  ngOnInit(): void {
    this.imageObject = [
      {
        image: '../../assets/images/arichardson2.jpg',
        thumbImage: '../../assets/images/arichardson2.jpg',
        title: 'Anthony Richardson 2023 Colts QB',
      },
      {
        image:
          '../../assets/images/stats/2023/richardson_2023_pass_ratings_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/richardson_2023_pass_ratings_graph_img.svg',
        title: 'Richardson 2023 Passer Rating',
      },
      {
        image:
          '../../assets/images/stats/2022/ryan_2022_pass_ratings_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2022/ryan_2022_pass_ratings_graph_img.svg',
        title: 'Ryan 2022 Passer Rating',
      },
    ];
  }
}
