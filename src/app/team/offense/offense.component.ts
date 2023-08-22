import { Component, OnInit } from '@angular/core';
//import '../offense/ngb-carousel.css';

@Component({
  selector: 'app-offense',
  templateUrl: './offense.component.html',
  styleUrls: ['./offense.component.scss'],
})
export class OffenseComponent implements OnInit {
  public imageObject: any;
  public imageObject2: any;

  constructor() {}

  ngOnInit(): void {
    this.imageObject = [
      {
        image:
          '../../assets/images/stats/2023/team_off_2023_run_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/team_off_2023_run_stats_graph_img.svg',
        title: 'Colts 2023 Team Rushing',
      },
      {
        image:
          '../../assets/images/stats/2023/team_off_2023_pass_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/team_off_2023_pass_stats_graph_img.svg',
        title: 'Colts 2023 Team Passing',
      },
      {
        image:
          '../../assets/images/stats/2023/team_off_2023_fdowns_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/team_off_2023_fdowns_stats_graph_img.svg',
        title: 'Colts 2023 Team First Downs',
      },
    ];
    this.imageObject2 = [
      {
        image:
          '../../assets/images/stats/2022/team_off_2022_run_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2022/team_off_2022_run_stats_graph_img.svg',
        title: 'Colts 2022 Team Rushing',
      },
      {
        image:
          '../../assets/images/stats/2022/team_off_2022_pass_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2022/team_off_2022_pass_stats_graph_img.svg',
        title: 'Colts 2022 Team Passing',
      },
      {
        image:
          '../../assets/images/stats/2022/team_off_2022_fdowns_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2022/team_off_2022_fdowns_stats_graph_img.svg',
        title: 'Colts 2022 Team First Downs',
      },
    ];
  }
}
