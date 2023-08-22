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
      name: 'Dayo Odeyingbo',
      position: 'DE',
      plink: 'https://www.pro-football-reference.com/players/O/OdeyDa00.htm',
    },
    {
      id: '1',
      name: 'Zaire Franklin',
      position: 'LB',
      plink: 'https://www.pro-football-reference.com/players/F/FranZa00.htm',
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
      name: 'Jonathan Taylor',
      position: 'RB',
      plink: 'https://www.pro-football-reference.com/players/T/TaylJo02.htm',
    },
    {
      id: '1',
      name: 'Yannick Ngakoue',
      position: 'DE',
      plink: 'https://www.pro-football-reference.com/players/N/NgakYa00.htm',
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
        'https://www.sports-reference.com/cfb/players/anthony-richardson-2.html',
    },
    {
      id: '1',
      name: 'Josh Downs',
      position: 'WR',
      plink: 'https://www.sports-reference.com/cfb/players/josh-downs-2.html',
    },
    {
      id: '2',
      name: 'Julius Brents',
      position: 'CB',
      plink:
        'https://www.sports-reference.com/cfb/players/julius-brents-1.html',
    },
  ];
  displayedColumns = ['Name', 'Position', 'Plink'];

  public imageObject: any;

  ngOnInit(): void {
    this.imageObject = [
      {
        image: '../../assets/images/ARichardson.jpg',
        thumbImage: '../../assets/images/ARichardson.jpg',
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
