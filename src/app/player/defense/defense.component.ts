import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.scss'],
})
export class PlayerDefenseComponent implements OnInit {
  public imageObject: any;
  public imageObject2: any;

  constructor() {}

  ngOnInit(): void {
    this.imageObject = [
      {
        image:
          '../../assets/images/stats/2024/player_def_2024_sacks_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2024/player_def_2024_sacks_stats_graph_img.svg',
        title: 'Colts 2024 Top Sackers',
      },
      {
        image:
          '../../assets/images/stats/2024/player_def_2024_tackles_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2024/player_def_2024_tackles_stats_graph_img.svg',
        title: 'Colts 2024 Top Tacklers',
      },
      {
        image:
          '../../assets/images/stats/2024/player_def_2024_ints_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2024/player_def_2024_ints_stats_graph_img.svg',
        title: 'Colts 2024 Top Interceptors',
      },
    ];
    this.imageObject2 = [
      {
        image:
          '../../assets/images/stats/2023/player_def_2023_sacks_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/player_def_2023_sacks_stats_graph_img.svg',
        title: 'Colts 2023 Top Sackers',
      },
      {
        image:
          '../../assets/images/stats/2023/player_def_2023_tackles_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/player_def_2023_tackles_stats_graph_img.svg',
        title: 'Colts 2023 Top Tacklers',
      },
      {
        image:
          '../../assets/images/stats/2023/player_def_2023_ints_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/player_def_2023_ints_stats_graph_img.svg',
        title: 'Colts 2023 Top Interceptors',
      },
    ];
  }
}
