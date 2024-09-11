import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-offense',
  templateUrl: './offense.component.html',
  styleUrls: ['./offense.component.scss'],
})
export class PlayerOffenseComponent implements OnInit {
  public imageObject: any;
  public imageObject2: any;

  constructor() {}

  ngOnInit(): void {
    this.imageObject = [
      {
        image:
          '../../assets/images/stats/2024/player_off_2024_runs_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2024/player_off_2024_runs_stats_graph_img.svg',
        title: 'Colts 2024 Top Rushers',
      },
      {
        image:
          '../../assets/images/stats/2024/player_off_2024_recs_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2024/player_off_2024_recs_stats_graph_img.svg',
        title: 'Colts 2024 Top Receivers',
      },
    ];
    this.imageObject2 = [
      {
        image:
          '../../assets/images/stats/2023/player_off_2023_runs_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/player_off_2023_runs_stats_graph_img.svg',
        title: 'Colts 2023 Top Rushers',
      },
      {
        image:
          '../../assets/images/stats/2023/player_off_2023_recs_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/player_off_2023_recs_stats_graph_img.svg',
        title: 'Colts 2023 Top Receivers',
      },
    ];
  }
}
