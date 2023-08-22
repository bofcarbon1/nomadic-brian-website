import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.scss'],
})
export class DefenseComponent implements OnInit {
  public imageObject: any;
  public imageObject2: any;

  constructor() {}

  ngOnInit(): void {
    this.imageObject = [
      {
        image:
          '../../assets/images/stats/2023/team_def_2023_run_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/team_def_2023_run_stats_graph_img.svg',
        title: 'Colts 2023 Team Rushing Allowed',
      },
      {
        image:
          '../../assets/images/stats/2023/team_def_2023_pass_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/team_def_2023_pass_stats_graph_img.svg',
        title: 'Colts 2023 Team Passing Allowed',
      },
      {
        image:
          '../../assets/images/stats/2023/team_def_2023_fdowns_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/team_def_2023_fdowns_stats_graph_img.svg',
        title: 'Colts 2023 Team First Downs Allowed',
      },
    ];
    this.imageObject2 = [
      {
        image:
          '../../assets/images/stats/2022/team_def_2022_run_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2022/team_def_2022_run_stats_graph_img.svg',
        title: 'Colts 2022 Team Rushing Allowed',
      },
      {
        image:
          '../../assets/images/stats/2022/team_def_2022_pass_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2022/team_def_2022_pass_stats_graph_img.svg',
        title: 'Colts 2022 Team Passing Allowed',
      },
      {
        image:
          '../../assets/images/stats/2022/team_def_2022_fdowns_stats_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2022/team_def_2022_fdowns_stats_graph_img.svg',
        title: 'Colts 2022 Team First Downs Allowed',
      },
    ];
  }
}
