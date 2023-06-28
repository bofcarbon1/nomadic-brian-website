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
          '../../assets/images/stats/player_def_2022_sacks_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/player_def_2022_sacks_stats_graph_img.svg',
        title: 'Colts 2022 Top Sackers',
      },
      {
        image:
          '../../assets/images/stats/player_def_2022_tackles_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/player_def_2022_tackles_stats_graph_img.svg',
        title: 'Colts 2022 Top Tacklers',
      },
      {
        image:
          '../../assets/images/stats/player_def_2022_ints_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/player_def_2022_ints_stats_graph_img.svg',
        title: 'Colts 2022 Top Interceptors',
      },
    ];
    this.imageObject2 = [
      {
        image:
          '../../assets/images/stats/player_def_2021_sacks_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/player_def_2021_sacks_stats_graph_img.svg',
        title: 'Colts 2021 Top Sackers',
      },
      {
        image:
          '../../assets/images/stats/player_def_2021_tackles_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/player_def_2021_tackles_stats_graph_img.svg',
        title: 'Colts 2021 Top Tacklers',
      },
      {
        image:
          '../../assets/images/stats/player_def_2021_ints_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/player_def_2021_ints_stats_graph_img.svg',
        title: 'Colts 2021 Top Interceptors',
      },
    ];
  }
}
